import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import Badge from '@material-ui/core/Badge';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button'
import PeopleIcon from '@material-ui/icons/People';
import TextField from '@material-ui/core/TextField';
import PinInput from "react-pin-input";
import SnackBar from "../Component/SnackBar"
import { UserCourseList, UserInfo } from "../test"
import {
    ResponsiveContainer,
    ComposedChart,
    AreaChart,
    LineChart,
    Line,
    Area,
    PieChart,
    Pie,
    Cell,
    YAxis,
    XAxis,
} from "recharts";

const mainChartData = getMainChartData();

function getMainChartData() {
    var resultArray = [];
    var tablet = getRandomData(31, 3500, 6500, 7500, 1000);
    var desktop = getRandomData(31, 1500, 7500, 7500, 1500);
    var mobile = getRandomData(31, 1500, 7500, 7500, 1500);

    for (let i = 0; i < tablet.length; i++) {
        resultArray.push({
            tablet: tablet[i].value,
            desktop: desktop[i].value,
            mobile: mobile[i].value,
        });
    }
    console.log(resultArray)
    return resultArray;
}
function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
    var array = new Array(length).fill();
    let lastValue;

    return array.map((item, index) => {
        let randomValue = Math.floor(Math.random() * multiplier + 1);

        while (
            randomValue <= min ||
            randomValue >= max ||
            (lastValue && randomValue - lastValue > maxDiff)
        ) {
            randomValue = Math.floor(Math.random() * multiplier + 1);
        }

        lastValue = randomValue;

        return { value: randomValue };
    });
}

const useStyles = makeStyles(theme => ({
    root: {
        width: 900,
    },
    mainChartHeaderLabels: {
        display: "flex",
        alignItems: "center",
    },
    mainChartLegentElement: {
        fontSize: "18px !important",
        marginLeft: theme.spacing(1),
    },

    app: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },

    main: {
        flex: 1,
    },

    divider: {
        marginBottom: 10,
        marginTop: 8,
    },

    paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.primary,
        width: '80%',

    },
    courseListPaper: {
        float: 'right',
        minHeight: '60vh'
    },
    attendancePaper: {
        minHeight: '45vh'
    },
    profgenCodePaper:{
        float: 'right',
        minHeight: '45vh'
    }, 
    paperContent: {
        textAlign: 'left',
        justify: 'justified',
        fontSize: 16,
    },
    checkAttendancePaper: {
        minHeight: 'calc(15vh - 8px)'
    },
    chartPaper: {
        marginLeft: 'auto',
        marginRight: 'auto'
    },

    container: {
        // maxHeight: 560,
    },

    tableHead: {
        fontSize: 22,
        textAlign: 'center'
    },
    tableRow: {
        '&:hover': {
            background: '#F1F1F1 !important',
            cursor: 'pointer'
        }
    },

    tablecell: {
        fontSize: 16,
        textAlign: 'center',
    },
}));



let Attendance = (props) => {
    var theme = useTheme();
    const classes = useStyles();
    let [pin, setPin] = useState()
    let [course, setCourse] = useState()
    let [attendanceRecord, setAttendanceRecord] = useState()
    let [generatedPin, setGeneratedPin] = useState(false)
    const { courselist, courselistDispatch } = useContext(UserCourseList);
    const { userinfo, userinfoDispatch } = useContext(UserInfo);

    let [Open, setOpen] = useState('')
    let [AlertMessage, setAlertMessage] = useState()
    let [success, setSuccess] = useState()
    let [chartOpen, setChartOpen] = useState(false)

    let pinOnChange = (value) => {
        setPin(value)
    }
    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        if (course && JSON.parse(localStorage.getItem('info')).type === 'prof') {
            fetch(`http://localhost:5000/attendance/teacher/checkPin/${course}`)
                .then(response => response.json())
                .then(response => {
                    if (!response.error) {
                        setGeneratedPin(response)
                    }
                });
        }
    }, [course])
    let handlePinSubmit = () => {
        if (pin) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    'courseCode': course,
                    'attendanceCode': pin,
                    'username': JSON.parse(localStorage.getItem('info')).username
                })
            };
            fetch('http://localhost:5000/attendance/student', requestOptions)
                .then(response => response.json())
                .then(response => {
                    if (!response.error) {
                        setAlertMessage('Success!')
                        setSuccess(true)
                        setOpen(true)
                    }
                    else {
                        setAlertMessage(response.error)
                        setSuccess(false)
                        setOpen(true)
                    }
                });
        } else {
            setAlertMessage('please enter the pin!')
            setSuccess(false)
            setOpen(true)
        }
    }
    let handleCheckRecord = () => {
        setChartOpen(true)
        if (course) {
            fetch(`http://localhost:5000/attendance/student/${course}/${JSON.parse(localStorage.getItem('info')).username}`)
                .then(response => response.json())
                .then(response => {
                    if (!response.error) {
                        setAttendanceRecord(response[0])
                    }
                    else {
                        setAlertMessage('No record/error occur!')
                        setSuccess(false)
                        setOpen(true)
                        setChartOpen(false)
                    }
                });
        }
    }
    let handleProfCheckRecord = () => {
        setChartOpen(true)
        if (course) {
            fetch(`http://localhost:5000/attendance/teacher/getAttendance/${course}`)
                .then(response => response.json())
                .then(response => {
                    if (!response.error) {
                        console.log(response)
                        setAttendanceRecord(response[0])
                    }
                    else {
                        setAlertMessage(response.error)
                        setSuccess(false)
                        setOpen(true)
                        setChartOpen(false)

                    }
                });
        }
    }

    let handlePinGenerate = () => {
        if (course) {
            fetch(`http://localhost:5000/attendance/teacher/getPin/${course}`)
                .then(response => response.json())
                .then(response => {
                    if (!response.error) {
                        setGeneratedPin(response)
                    }
                    else {
                        setAlertMessage('No record/error occur!')
                        setSuccess(false)
                        setOpen(true)
                    }
                });
        }
    }
    let handleCloseAttendance = () => {
        fetch(`http://localhost:5000/attendance/teacher/closeAttendance/${course}`)
            .then(response => response.json())
            .then(response => {
                if (!response.error) {
                    setGeneratedPin(false)
                }
                else {
                    setAlertMessage('No record/error occur!')
                    setSuccess(false)
                    setOpen(true)
                }
            });
    }
    let calGeneralAttendRate = () => {
        if (attendanceRecord && attendanceRecord.attendanceDate && Object.keys(attendanceRecord.student).length > 0) {
            let tmp = []
            for (const key in attendanceRecord.student)
                tmp.push(attendanceRecord.student[key])
            let rate = sumArrays(...tmp)
            let len = rate.length
            let chartData = [];
            for (let i = 0; i < len; i++)
                chartData.push({ 'userRate': rate[i] })
            console.log(chartData)
            return chartData
        }
    }
    let sumArrays = (...arrays) => {
        const n = arrays.reduce((max, xs) => Math.max(max, xs.length), 0);
        const result = Array.from({ length: n });
        return result.map((_, i) => arrays.map(xs => xs[i] || 0).reduce((sum, x) => sum + x, 0));
    }

    let calcAttendRate = () => {
        if (attendanceRecord && attendanceRecord.rate) {
            let rate = []
            let len = attendanceRecord.rate.length
            for (let i = 0; i < len; i++) {
                if (i == 0)
                    rate.push({ 'userRate': (attendanceRecord.rate[i]) / 1 * 100 })
                else
                    rate.push({ 'userRate': (rate[i - 1].userRate * (i) / 100 + parseInt(attendanceRecord.rate[i])) / (i + 1) * 100 })
            }
            return rate
        }
    }

    let renderAttendace = () => {
        return (
            <React.Fragment>
                <div className={classes.app}>
                    <CssBaseline />
                    <div className={classes.main}>
                        <Grid container>
                            {/* List of Courses registered by the user / professor */}
                            <Grid item xs={6}>
                                <Paper className={ JSON.parse(localStorage.getItem('info')).type === 'student' ? 
                                 `${classes.courseListPaper} ${classes.paper}` : `${classes.profgenCodePaper} ${classes.paper}`}>
                                    <TableContainer className={classes.container}>
                                        <Table stickyHeader aria-label="sticky table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell className={classes.tableHead}>
                                                        <Typography variant="h6" noWrap>My Courses</Typography>
                                                    </TableCell>
                                                </TableRow>
                                            </TableHead>
                                            {/* User's Course List */}
                                            <TableBody>
                                                {courselist && courselist.map(item => {
                                                    return (
                                                        <TableRow className={classes.tableRow}
                                                            onClick={() => {
                                                                setChartOpen(false)
                                                                setCourse(item.code)
                                                            }}>
                                                            <TableCell className={classes.tablecell}>{item.code} {item.name}</TableCell>
                                                        </TableRow>

                                                    )
                                                })}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Paper>
                            </Grid>
                            {/* If a Course is selected and prof is taking attendance, show below, 
                        otherwise return "No attendance required for this course"*/}
                            {course ? JSON.parse(localStorage.getItem('info')).type === 'student' ?
                                <Grid item xs={6}>
                                    <Paper className={`${classes.attendancePaper} ${classes.paper}`}>
                                        <PeopleIcon fontSize="large" /><br />
                                        <Typography variant="h4" component="h4">Verify {course} Attendance</Typography>
                                        <Divider className={classes.divider} />
                                        <Typography variant="h6" component="h5">Selected Course: {course}</Typography>
                                        <Typography variant="h6" component="h5">Enter the 4 Digit Code your Teacher gave you</Typography>
                                        <PinInput
                                            length={4}
                                            focus
                                            style={{ padding: '30px 0' }}
                                            // ref={p => (this.pin = p)}
                                            type="numeric"
                                            onChange={pinOnChange}
                                        />
                                        <Divider className={classes.divider} />
                                        <Button variant="contained" onClick={handlePinSubmit} color="primary">Sumbit Pin</Button>
                                    </Paper>
                                    <Paper className={`${classes.checkAttendancePaper} ${classes.paper}`}>
                                        <Typography variant="h4" component="h4">Check {course} Attendance Record</Typography>
                                        <Divider className={classes.divider} />
                                        <Button variant="contained" onClick={handleCheckRecord} color="primary">Check Record</Button>
                                    </Paper>
                                </Grid>
                                : <Grid item xs={6}>
                                    <Paper className={`${classes.attendancePaper} ${classes.paper}`}>
                                        <PeopleIcon fontSize="large" /><br />
                                        <Typography variant="h4" component="h4">Generate {course} Attendance Code</Typography>
                                        <Divider className={classes.divider} />
                                        <Typography variant="h6" component="h5">Selected Course: {course}</Typography>
                                        <Divider className={classes.divider} />
                                        {!generatedPin ?
                                            <React.Fragment>
                                                <Button variant="contained" onClick={handlePinGenerate} color="primary">Generate Code</Button>
                                                <Divider className={classes.divider} />

                                                <Button variant="contained" onClick={handleProfCheckRecord} color="default">Check Course Attendance Record</Button>
                                            </React.Fragment>

                                            :
                                            <React.Fragment>
                                                <Typography variant="h4" component="h4">Generated Code: {generatedPin}</Typography>
                                                <Button variant="contained" onClick={handleCloseAttendance} color="secondary">Close Attendance</Button>

                                            </React.Fragment>
                                        }
                                    </Paper>
                                    {/* <Paper className={`${classes.checkAttendancePaper} ${classes.paper}`}>
                                        <Typography variant="h4" component="h4">Check {course} Attendance Record</Typography>
                                        <Divider className={classes.divider} />
                                        <Button variant="contained" onClick={handleCheckRecord} color="primary">Check Record</Button>
                                    </Paper> */}
                                </Grid>
                                : <div></div>
                            }

                        </Grid>
                        {chartOpen ? JSON.parse(localStorage.getItem('info')).type === 'prof'  ?  renderProfChart() : renderStudentChart() : <div></div>}


                    </div>
                </div>
                <SnackBar
                    handleClose={handleClose}
                    Open={Open}
                    AlertMessage={AlertMessage}
                    success={success}
                />
            </React.Fragment>
        )
    }

    let renderProfChart = () => {
        if (attendanceRecord)
            return (
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className={` ${classes.paper} ${classes.chartPaper}`}>

                            <div className={`${classes.mainChartHeader} `}>
                                <Typography
                                    variant="h5"
                                    color="#4A4A4A"
                                    colorBrightness="secondary"
                                >Attendance Line Chart (Nubmer of Students)</Typography>
                            </div>
                            <ResponsiveContainer width="100%" minWidth={500} height={350}>
                                <ComposedChart
                                    margin={{ top: 0, right: -15, left: -15, bottom: 0 }}
                                    data={calGeneralAttendRate()}
                                // data={mainChartData}
                                >
                                    <YAxis
                                        // ticks={[0, 1]}
                                        tick={{ fill: "#B9B9B9", fontSize: 14 }}
                                        stroke={'#B9B9B9'}
                                        tickLine={false}

                                    />
                                    <XAxis
                                        tickFormatter={i => i + 1}
                                        tick={{ fill: "#B9B9B9", fontSize: 14 }}
                                        stroke={"#B9B9B9"}
                                        tickLine={false}
                                        label={{ value: "Lecture", position: "insideLeft", angle: 0, dx: 10, dy: 10 }}
                                    />
                                    <Area
                                        type="natural"
                                        dataKey="userRate"
                                        fill={'#1976d2'}
                                        strokeWidth={0}
                                        activeDot={false}
                                    />
                                </ComposedChart>
                            </ResponsiveContainer>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper className={` ${classes.paper} ${classes.chartPaper}`}>

                            <div className={`${classes.mainChartHeader} `}>
                                <Typography
                                    variant="h5"
                                    color="#4A4A4A"
                                    colorBrightness="secondary"
                                >Class Attendance Record:</Typography>
                            </div>
                            <TableContainer className={classes.container}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className={classes.tableHead}>
                                                <Typography variant="h6" noWrap>Student</Typography>
                                            </TableCell>
                                            {attendanceRecord && attendanceRecord.attendanceDate && attendanceRecord.attendanceDate.map((key, index) => {
                                                return <TableCell className={classes.tablecell}>{attendanceRecord.attendanceDate[index].slice(0, 10)}</TableCell>

                                            })}
                                        </TableRow>
                                    </TableHead>
                                    {/* User's Course List */}
                                    <TableBody>
                                        {attendanceRecord && attendanceRecord.attendanceDate && Object.keys(attendanceRecord.student).map((key, index) => {
                                            return (
                                                <TableRow className={classes.tableRow} >
                                                    <TableCell className={classes.tablecell}>{key}</TableCell>
                                                    {attendanceRecord.student[key].map((item, index) => {
                                                        return (
                                                            <TableCell className={classes.tablecell}> {item ? 'Attended' : 'Not Attended'} </TableCell>
                                                        )
                                                    })}


                                                </TableRow>
                                            )
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </Grid>
                </Grid>
            )
            else{
                return <div><h3>Loading...</h3></div>
            }
    }

    let renderStudentChart = () => {
        if (attendanceRecord)
            return (
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className={` ${classes.paper} ${classes.chartPaper}`}>

                            <div className={`${classes.mainChartHeader} `}>
                                <Typography
                                    variant="h5"
                                    color="#4A4A4A"
                                    colorBrightness="secondary"
                                >Your Attendance Line Chart (In Percentage %)</Typography>
                            </div>
                            <ResponsiveContainer width="100%" minWidth={500} height={350}>
                                <ComposedChart
                                    margin={{ top: 0, right: -15, left: -15, bottom: 0 }}
                                    data={calcAttendRate()}
                                // data={mainChartData}
                                >
                                    <YAxis
                                        ticks={[0, 25, 50, 75, 100]}
                                        tick={{ fill: "#B9B9B9", fontSize: 14 }}
                                        stroke={'#B9B9B9'}
                                        tickLine={false}

                                    />
                                    <XAxis
                                        tickFormatter={i => i + 1}
                                        tick={{ fill: "#B9B9B9", fontSize: 14 }}
                                        stroke={"#B9B9B9"}
                                        tickLine={false}
                                        label={{ value: "Lecture", position: "insideLeft", angle: 0, dx: 10, dy: 10 }}
                                    />
                                    <Area
                                        type="natural"
                                        dataKey="userRate"
                                        fill={'#1976d2'}
                                        strokeWidth={0}
                                        activeDot={false}
                                    />
                                </ComposedChart>
                            </ResponsiveContainer>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper className={` ${classes.paper} ${classes.chartPaper}`}>

                            <div className={`${classes.mainChartHeader} `}>
                                <Typography
                                    variant="h5"
                                    color="#4A4A4A"
                                    colorBrightness="secondary"
                                >Your Attendance Record:</Typography>
                            </div>
                            <TableContainer className={classes.container}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className={classes.tableHead}>
                                                <Typography variant="h6" noWrap>Date</Typography>
                                            </TableCell>
                                            <TableCell className={classes.tableHead}>
                                                <Typography variant="h6" noWrap>Attendance Record</Typography>
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    {/* User's Course List */}
                                    <TableBody>
                                        {attendanceRecord && attendanceRecord.attendanceDate && attendanceRecord.attendanceDate.map((item, index) => {
                                            return (
                                                <TableRow className={classes.tableRow} >
                                                    <TableCell className={classes.tablecell}>{item.slice(0, 10)}</TableCell>
                                                    <TableCell className={classes.tablecell}>{attendanceRecord.rate && attendanceRecord.rate[index] === '1' ? 'Attended' : 'Not Attended'}</TableCell>
                                                </TableRow>
                                            )
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </Grid>
                </Grid>
            )
            else{
                return <div><h3>Loading...</h3></div>
            }
    }

    let RedirectToLogin = () => {
        alert("You have not yet login!");
        const { history } = props;
        history.push('/login');
    }
    return (
        <React.Fragment>
            {localStorage.getItem('token') ? renderAttendace() : RedirectToLogin()}
        </React.Fragment>
    )
}

export default Attendance
