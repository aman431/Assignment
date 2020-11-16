// import React from 'react';
import React,{useState} from 'react'
import {Grid, Form, Segment, Icon, Header, Button, Message} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import firebase from '../../../server/firebase';

export default function Login() {
    let user = {
        userName: '',
        email: '',
        password: '',
        confirmpassword: ''
    }

    let error = [];
    const [userState, setuserState] = useState(user);
    const [errorState, seterrorState] = useState(error);
    const [isLoading, setisLoading] = useState(false);
    // const [isSuccess, setisSuccess] = useState(false);

    const handleInput = (event) => {
        let target = event.target;
        setuserState((currentState) => {
            let currentuser = {...currentState};
            currentuser[target.name] = target.value 
            return currentuser;
        })
    }

    const checkForm = () => {
        if(isFormValidate()){
            seterrorState((error) => error.concat({message: "Field are requied"}));
            // console.log("Working");
            return false;
        }
        return true;
    } 

    const isFormValidate = () => {
        return !userState.email.length || !userState.password.length;
    }

    const onSubmit = (event) => {
        setisLoading(true)
        // setisSuccess(false)
        seterrorState(() => [])
        if(checkForm()){
            firebase
            .auth()
            .signInWithEmailAndPassword(userState.email, userState.password)
            .then(user => {
                setisLoading(false)
                console.log(user)
                // updateuserdetails(user);
                // alert("SuccessFully Register");
            })
            .catch(servererror => {
                setisLoading(false)
                seterrorState((error) => error.concat(servererror))
                // console.log(servererror);
            })
        }  
    }
    const formatError = () => {
        // console.log(errorState);
        // console.log(error)
        return errorState.map((error, index) => <p key={index}>{error.message}</p>)
    }
    return (
        <div>
            <Grid verticalAlign="middle" textAlign="center">
                <Grid.Column style={{maxWidth: "500px",marginTop:"40px"}}>
                    <Header icon as="h2">
                        <Icon name="slack">
                            Login
                        </Icon>
                    </Header>
                    <Form onSubmit={onSubmit}>
                        <Segment stacked>
                            <Form.Input 
                            name="email"
                            type="email"
                            value={userState.email}
                            icon="mail"
                            iconPosition="left"
                            onChange = {handleInput}
                            placeholder = "user Email"
                            required="true"
                            />
                            <Form.Input 
                            name="password"
                            type="password"
                            value={userState.password}
                            icon="lock"
                            iconPosition="left"
                            onChange = {handleInput}
                            placeholder = "Password"
                            required="true"
                            />
                        </Segment>
                        <Button disabled={isLoading} loading={isLoading}>Login</Button>
                    </Form>
                    {errorState.length > 0 && <Message error>
                        <h3>Error</h3>
                        {formatError()}
                    </Message> 
                    }
                    <Message>
                        Not a User? <Link to="/register">Register</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        </div>
    )
}
