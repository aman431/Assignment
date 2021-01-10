import React from 'react';
import './UserInfo.css';
import { Menu } from 'semantic-ui-react';
import Avatar from '@material-ui/core/Avatar';
import Switch from '@material-ui/core/Switch';

function UserInfo() {
    return (
        <Menu vertical fixed="upper" borderless size="large" className="upper">
            <div className="top_header">
                <div style={{ display: 'flex', flexDirection: "row" }}>
                    <Avatar className="avatar" alt="Remy Sharp" src="https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" />
                    <div className="User_name">
                        <p>Appristine</p>
                        <p style={{ marginTop: -15, color: 'rgb(145, 142, 142)' }}>Online</p>
                    </div>
                </div>
                <div style={{marginTop:'15px'}}>
                <Switch
                    name="checkedA"
                    inputProps={{'aria-label': 'primary checkbox' }}
                />
                </div>
            </div>
        </Menu>
    )
}

export default UserInfo;