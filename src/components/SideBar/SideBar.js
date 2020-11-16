import React from 'react'
import './SideBar.css';
import UserInfo from './UserInfo.js';
import Channel from './Channels/Channel.js';

import {Menu} from 'semantic-ui-react';
const SideBar = () =>  {
    return( 
    <Menu vertical fixed = "left" borderless size="large" className = "side_bar">
        <UserInfo />
        <Channel />
    </Menu>

    )
}

export default SideBar