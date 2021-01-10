import React from 'react';
import './chat.css';
import { Messagedata, Todaydata } from './Messagedata.js';
import { Menu, Segment, Header, Icon, Input } from 'semantic-ui-react';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, green } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import CallIcon from '@material-ui/icons/Call';
import AddIcon from '@material-ui/icons/Add';
import ErrorIcon from '@material-ui/icons/Error';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import AttachmentIcon from '@material-ui/icons/Attachment';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import SendIcon from '@material-ui/icons/Send';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import CodeIcon from '@material-ui/icons/Code';
import ListIcon from '@material-ui/icons/List';
import MenuIcon from '@material-ui/icons/Menu';
import FormatStrikethroughIcon from '@material-ui/icons/FormatStrikethrough';


const useStyles = makeStyles((theme) => ({
    // root: {
    //     display: 'flex',
    //     '& > *': {
    //         margin: theme.spacing(1),
    //     },
    // },
    square: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[400],
        marginRight: '20px',
        borderRadius: '8px',
        height: '35px',
        width: '30px'
    },
    rounded: {
        color: '#fff',
        backgroundColor: green[500],
    },
    icons: {
        position: "relative",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: 30,
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 22,
        cursor: "pointer"
    },
}));

function Chat() {
    const classes = useStyles();
    return (
        <div>
            <Segment clearing>
                <Header style={{ height: '30px' }} floated="left" fluid="true" as="h4">
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Avatar variant="square"
                            className={classes.square}
                            src="https://images.unsplash.com/photo-1534683255570-307db0f1f1fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                        >J</Avatar>
                        <div>
                            <span>
                                #Development group
                            </span>
                            <Header.Subheader> 32 members</Header.Subheader>
                        </div>
                    </div>
                </Header>
                <Header floated="right" className="header_right">
                    <Input
                        name="search"
                        icon="search"
                        placeholder="search Message"
                        size="mini"
                        className="space_between_header_right"
                    />
                    <CallIcon className="icons" />
                    <AddIcon className="icons" />
                    <ErrorIcon className="icons" />
                </Header>
            </Segment>

            {Messagedata.map(item => {
                return (
                    <div className="message" key={item.id}>
                        <Avatar variant="square"
                            className={classes.square}
                            src={item.image}
                        >J</Avatar>
                        <div>
                            <span className="text">
                                {item.name}
                            </span>
                            <p>{item.message}</p>
                        </div>
                    </div>
                )
            })}
            <span className="border" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                Today < ArrowDropDownIcon />
            </span>
            <div className="border1">
            </div>
            {Todaydata.map(item => {
                return (
                    <div className="message" key={item.id}>
                        <Avatar variant="square"
                            className={classes.square}
                            src={item.image}
                        >J</Avatar>
                        <div>
                            <span className="text">
                                {item.name}
                            </span>
                            <p>{item.message}</p>
                        </div>
                    </div>
                )
            })}
            <div style={{ marginLeft: '20px', marginRight: '20px', marginTop: '40px' }}>
                {/* <Grid item xs={12}> */}
                <TextField
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    rows={3}
                    variant="outlined"
                    style={{ width: '100%' }}
                />
                    <Grid item className={classes.icons}>
                    <div>
                        <FormatBoldIcon className="message_icon"/>
                        <FormatItalicIcon className="message_icon"/>
                        <FormatStrikethroughIcon className="message_icon"/>
                        <CodeIcon className="message_icon"/>
                        <AttachmentIcon className="message_icon"/>
                        <ListIcon className="message_icon"/>
                        <MenuIcon className="message_icon"/>
                    </div>
                    <div>
                        <AlternateEmailIcon className="message_icon_right" />
                        <AttachmentIcon className="message_icon_right" />
                        < InsertEmoticonIcon className="message_icon_right" />
                        < SendIcon className="message_icon_right" />
                    </div>
                    </Grid>
                {/* </Grid> */}


                {/* <CKEditor
                    editor={ClassicEditor}
                    onInit={editor => {
                        //code
                    }}
                /> */}
            </div>
        </div>
    )
}

export default Chat;
