import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Card, Grid, TextField } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'
import SendIcon from '@material-ui/icons/Send';


const useStyles = makeStyles({
    container: {
        padding: "13em",

    },
    Dialog: {
        padding: "0.6em",
        paddingTop: "0em",
    },
    myDialog: {
        padding: "0.6em",
        paddingTop: "0em",
        background: blue[500],
        color: "white"
    },
    Grid: {
        marginTop: "1.2em",
    },
    userName: {
        fontWeight: 600,
        fontSize: 12,
        maeginBottom: "0.0em"
    },
    inputGrid: {
        marginTop: "10em",
    },
    inputField: {
        marginTop: "10em",
        '& label.Mui-focused': {
            color: blue[500],
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: blue[500],
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: blue[500],
            },
        },
        width: "20em"
    },
    sendIcon: {
        marginTop: "7.5em",
    }


});

const OtherDialog = (props: any) => {
    const { name, text, avatar } = props
    const styles = useStyles()
    return (
        <Grid container className={styles.Grid}>
            <Grid item>
                <Avatar alt="Remy Sharp" src={avatar} />
            </Grid>
            <Grid item>
                <Card className={styles.Dialog}>
                    <p className={styles.userName}>{name}</p>
                    {text}
                </Card>
            </Grid>
        </Grid>
    )
}

const MyDialog = (props: any) => {
    const { name, text, avatar } = props
    const styles = useStyles()
    return (
        <Grid container justify="flex-end" className={styles.Grid}>
            <Grid item>

                <Card className={styles.myDialog}>
                    <p className={styles.userName}>{name}</p>
                    {text}</Card>
            </Grid>
            <Grid item>
                <Avatar alt="Remy Sharp" src={avatar} />
            </Grid>
        </Grid>
    )
}



export default () => {
    const styles = useStyles()
    const [Id, setId] = useState(2);
    const [Text, setText] = useState("");

    const [messages, setMessages] = useState([
        {
            id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
                id: 2,
                name: 'React',
                avatar: "https://material-ui.com/static/images/avatar/1.jpg",
            },
        },
        {
            id: 1,
            text: 'Hello World',
            createdAt: new Date(),
            user: {
                id: 1,
                name: 'Remy Sharp',
                avatar: "https://material-ui.com/static/images/avatar/1.jpg",
            },
        },
    ]);
    function sendMessage() {
        setId(Id => Id += 1);

        let message = {
            id: Id,
            text: Text,
            createdAt: new Date(),
            user: {
                id: 2,
                name: 'React',
                avatar: "https://material-ui.com/static/images/avatar/1.jpg",
            }
        }
        setMessages(messages => [...messages, message]);
    }
    return (
        <div className={styles.container} >

            {messages.map(message => message.user.id === 2 ? <MyDialog name={message.user.name} text={message.text} avatar={message.user.avatar} /> : <OtherDialog name={message.user.name} text={message.text} avatar={message.user.avatar} />)}
            <Grid container justify="flex-end"  >
                <Grid item>
                    <TextField onChange={e => setText(e.target.value)} className={styles.inputField} id="standard-basic" label="Input Messages" />
                </Grid>
                <Grid item >
                    <SendIcon className={styles.sendIcon} onClick={sendMessage} />
                </Grid>

            </Grid>


        </div >
    );
}