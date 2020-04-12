import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { std } from 'mathjs'

import Autocomplete from '@material-ui/lab/Autocomplete';
import FullPaperPageHeader from '../Component/FullPaperPageHeader'
import { UserType, UserCourseList, UserInfo } from "../test"
import axios from "axios"
import LineChart from "../Component/LineChart"
import BarChart from "../Component/BarChart"
import MixedChart from "../Component/MixedChart"
import QuizQuestion from "../Component/QuizQuestion"
const useStyles = makeStyles(theme => ({
    title: {
        color: '#B9B9B9',
        paddingTop: '15px',
        paddingBottom: '15px'
    },
    paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.primary,
        minHeight: 'calc(100vh - 80px)'
    },

    paperContent: {
        textAlign: 'left',
        justify: 'justified',
        width: '60%',
        margin: '0 auto'
    },
    completeBox: {
        padding: '30px 0',
        width: '70%'
    },
    message: {
        paddingBottom: '25px',
    }


}));
let QuizHistory = (props) => {
    const classes = useStyles();
    let [AvaCourse, setAvaCourse] = useState()
    let [Course, setCourse] = useState(props.match.params.course && props.match.params.course)
    let [success, setSuccess] = useState()
    let [alertMessage, setAlertMessage] = useState()
    let [openAlert, setOpenAlert] = useState()
    let [result, setResult] = useState()
    let [loading, setLoading]=useState()

    const { userType } = useContext(UserType)
    const { courselist, courselistDispatch } = useContext(UserCourseList);
    const [quizNumber, setQuizNumber] = useState()
    console.log(quizNumber)
    useEffect(() => {
        //fetch all quiz result
        let filered =[]
        filered = courselist && courselist.filter(i=> i.code === Course)
        if (Course &&  filered.length >0) {
        setLoading(true)

            axios.get(`http://localhost:5000/quiz/result/${Course}`, { withCredentials: true }).then(response => response.data).then((response) => {
                if (response.redirectURL) {
                    //back to login
                    window.location.href = 'http://localhost:3000' + response.redirectURL
                }
                else if (!response.error) {
                    setResult(response.docs)
                    setLoading(false)
                    console.log(response.docs)
                }
                else {
                    setLoading(false)
                    alert(response.error)
                }
            })
        }
    }, [Course])


    let calAverage = () => {
        let tmparr = []
        result.socredist.map(item => {
            let sum = item.reduce((a, b) => a + b, 0)
            let avg = sum / item.length
            tmparr.push(avg)
        })
        return tmparr
    }
    let renderQuizQNA = () => {
        return (
            <React.Fragment>
                <h2>Quiz Number {quizNumber}</h2>
                <QuizQuestion
                    question={result.question[quizNumber - 1]}
                    ans={result.ans[quizNumber - 1]}
                    userscore={result.userscore[quizNumber - 1].ans}
                >


                </QuizQuestion>
            </React.Fragment>

        )
    }

    let renderAddCourse = () => {

        return (
            <React.Fragment>
                <FullPaperPageHeader title={`${Course} Quiz Record`} body1={'Select Course To View Your Quiz Result!'}>
                    <div>
                        {Array.isArray(courselist) &&
                            <Autocomplete
                                id="combo-box-demo"
                                options={courselist}
                                autoFocus
                                className={classes.completeBox}
                                getOptionLabel={(courselist) => courselist.code}
                                onChange={(e, value) => setCourse(value.code)}
                                renderInput={(params) => <TextField {...params} label="Search or select for a course" variant="outlined" />}
                            />
                        }
                        {result && result.userscore && <h2>Selected Course: {Course}</h2> }
                        {loading &&  <h2>Loading...</h2>}


                        {result && result.userscore &&
                            <React.Fragment>
                                <BarChart
                                    data={result.userscore.map(i => i.score)}
                                    label={result.userscore.map((i, index) => index + 1)}
                                    title={`Your Score Record`}
                                />
                                <MixedChart
                                    data0={result.socredist.map(i => std(i))}
                                    data1={calAverage()}
                                    label={result.userscore.map((i, index) => (index + 1))}
                                    title={`Overall Class Result (Mean And SD)`}
                                    label1={'SD'}
                                    label0={'Class Average'}
                                />

                                <MixedChart
                                    data0={result.userscore.map(i => i.score)}
                                    data1={calAverage()}
                                    label={result.userscore.map((i, index) => index + 1)}
                                    title={`Compare To Overall Class (Your Score VS Overall Class)`}
                                    label0={'Your Score'}
                                    label1={'Class Average'}
                                />

                                <Autocomplete
                                    id="combo-box-demo"
                                    options={result.userscore.map((i, index) => 'Quiz No.' + (index + 1))}
                                    autoFocus
                                    className={classes.completeBox}
                                    getOptionLabel={(e) => e}
                                    onChange={(e, value) => setQuizNumber(value.slice(8))}
                                    renderInput={(params) => <TextField {...params} label="Check Quiz Question And Answer " variant="outlined" />}
                                />


                            </React.Fragment>
                        }
                        {quizNumber && renderQuizQNA()}

                    </div>
                </FullPaperPageHeader>

            </React.Fragment>
        )
    }

    let RedirectToLogin = () => {
        alert("You have not yet login!");
        const { history } = props;
        history.push('/login');
    }
    return (
        <React.Fragment>
            {renderAddCourse()}
        </React.Fragment>
    )
}

export default QuizHistory
