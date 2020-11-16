import React from 'react'
import {Grid, Header, Icon, Image, Dropdown} from 'semantic-ui-react';
import {connect} from 'react-redux';
import './UserInfo.css';
import firebase from '../../server/firebase';

const UserInfo = (props) => {

    const getDropDownOptions  = () => {
        return[
                {
                    key: "signout",
                    text: <span onClick={signOut}>Sign Out</span>
                }
        ]
    }

    const signOut = () => {
        firebase.auth()
        .signOut()
        .then(() => {
            console.log("User Signout out ")
        })
    }

    if(props.user){
    return (
        <Grid>
            <Grid.Column>
                <Grid.Row className="userinfo_grid_row">
                    <Header inverted as="h2">
                        <Icon name="slack" />
                        <Header.Content>Slack </Header.Content>
                    </Header>
                    <Header inverted as="h4" className="userinfo_displayname">
                        <Dropdown
                            trigger={
                                <span>
                                    <Image src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" avatar></Image>
                                    {props.user.displayName}
                                </span>
                            }
                            options={getDropDownOptions()}
                        >
                        </Dropdown>
                    </Header>
                </Grid.Row>
            </Grid.Column>
        </Grid>
    )
    }
        return null;
}

const mapStateToProps = (state) => {
    return{
        user: state.user.currentUser
    }
    // console.log(state.user.currentuser);
}
 export default connect(mapStateToProps)(UserInfo);