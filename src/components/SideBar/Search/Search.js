import React from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import { Menu } from 'semantic-ui-react';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, green } from '@material-ui/core/colors';
import GroupIcon from '@material-ui/icons/Group';
import ListIcon from '@material-ui/icons/List';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsIcon from '@material-ui/icons/Settings';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
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
}));


function Search() {
    const classes = useStyles();
    return (
        <div className="main">
            <div className="sidebar_data">
                <div style={{ backgroundColor: 'lightgrey', height: '40px' }}>
                    <div className="search_data" style={{ paddingTop: '10px' }} >
                        <SearchIcon style={{ marginRight: '20px' }} />
                        <p>Search</p>
                    </div>
                </div>
                <div className="search_data">
                    <PermIdentityIcon style={{ marginRight: '20px' }} />
                    <p>All users</p>
                </div>
                <div className="search_data">
                    <ListIcon style={{ marginRight: '20px' }} />
                    <p>All channels</p>
                </div>
                <div className="search_data">
                    <NotificationsNoneIcon style={{ marginRight: '20px' }} />
                    <p>Notifications</p>
                </div>
                <div className="search_data">
                    <SettingsIcon style={{ marginRight: '20px' }} />
                    <p>Settings</p>
                </div>
                <div className='channels'>
                    <AddIcon style={{ marginRight: '4px' }} />
                    <p>Create Channels</p>
                    <ArrowDropDownIcon style={{ marginRight: '0px' }} />
                </div>
                <div className="Create_channels">
                    <Avatar variant="square"
                        className={classes.square}
                        src="https://images.unsplash.com/photo-1534683255570-307db0f1f1fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    >J</Avatar>
                    <p className="channel_text"># Justine Coleman</p>
                </div>
                <div style={{ backgroundColor: '#f5e5ae', height: '45px' }}>
                    <div className="Create_channels" style={{paddingTop: '5px'}}>
                        <Avatar variant="square"
                            className={classes.square}
                            src="https://images.unsplash.com/photo-1561480643-94fba607e578?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=523&q=80"
                        >D</Avatar>
                        <p className="channel_text"># Development</p>
                    </div>
                </div>
                {/* <div className="Create_channels">
                    <Avatar variant="square" 
                    className={classes.square}
                    src="https://images.unsplash.com/photo-1561480643-94fba607e578?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=523&q=80"
                    >D</Avatar>
                    <p className="channel_text"># Development</p>
                </div> */}
                <div className="Create_channels">
                    <Avatar variant="square"
                        className={classes.square}
                        src="https://images.unsplash.com/photo-1565038803046-4f6112dc9c4c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    >L</Avatar>
                    <p className="channel_text"># Derek Lee</p>
                </div>
                <div className='channels'>
                    <p>Users</p>
                    <ArrowDropDownIcon style={{ marginRight: '0px' }} />
                </div>
                <div className="Create_channels">
                    <Avatar variant="square"
                        className={classes.square}
                        src="https://images.unsplash.com/photo-1567336273898-ebbf9eb3c3bf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=486&q=80"
                    />
                    <p className="channel_text">Cody Stevens</p>
                    <span style={{height:'7px', width: '7px', backgroundColor:'green', marginLeft:'10px', marginTop:'10px', borderRadius:'50%'}}> </span>                 
                    <span style={{height:'20px', width: '20px', backgroundColor:'red', marginLeft:'25px', marginTop:'4px', borderRadius:'50%'}}><span style={{color:'white', padding:'5px'}}>8</span></span>                 
                </div>
                <div className="Create_channels">
                    <Avatar variant="square"
                        className={classes.square}
                        src="https://images.unsplash.com/photo-1595399874399-10f2444c4eb2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=475&q=80"
                    />
                    <p className="channel_text">Heather Hart</p>
                    <span style={{height:'7px', width: '7px', backgroundColor:'green', marginLeft:'10px', marginTop:'10px', borderRadius:'50%'}}> </span>
                </div>
                <div className="Create_channels">
                    <Avatar variant="square"
                        className={classes.square}
                        src="https://images.unsplash.com/photo-1571929232190-30f765788262?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=535&q=80"
                    />
                    <p className="channel_text">Kevin Morgan</p>
                    <span style={{height:'7px', width: '7px', backgroundColor:'red', marginLeft:'10px', marginTop:'10px', borderRadius:'50%'}}> </span>
                </div>
                <div className="Create_channels">
                    <Avatar variant="square"
                        className={classes.square}
                        src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    >L</Avatar>
                    <p className="channel_text">Jessica Chen</p>
                    <span style={{height:'7px', width: '7px', backgroundColor:'gray', marginLeft:'10px', marginTop:'10px', borderRadius:'50%'}}> </span>
                    <span style={{height:'20px', width: '20px', backgroundColor:'red', marginLeft:'33px', marginTop:'4px', borderRadius:'50%'}}><span style={{color:'white', padding:'5px'}}>5</span></span>                 
                </div>
                <div className="Create_channels">
                    <Avatar
                        variant="square"
                        className={classes.square}
                        src="https://images.unsplash.com/photo-1585925130019-eeafcd31b7f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=451&q=80"
                    >L</Avatar>
                    <p className="channel_text">Kendra Gonzales</p>
                    <span style={{height:'7px', width: '7px', backgroundColor:'gray', marginLeft:'10px', marginTop:'10px', borderRadius:'50%'}}> </span>

                </div>
                <div className="Create_channels">
                    <Avatar
                        variant="square"
                        className={classes.square}
                        src="https://images.unsplash.com/photo-1607283455867-3c1dc4166f26?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=548&q=80"
                    >L</Avatar>
                    <p className="channel_text">Molly Vasquez</p>
                    <span style={{height:'7px', width: '7px', backgroundColor:'darkorange', marginLeft:'10px', marginTop:'10px', borderRadius:'50%'}}> </span>
                </div>
            </div>
        </div>
    )
}

export default Search;