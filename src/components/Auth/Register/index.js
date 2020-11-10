import React , {useState} from 'react'
import {Grid, Form, Segment, Icon, Header, Button, Message} from 'semantic-ui-react';
// import firebase from '../.././'
const Register = () => {

    // Create a Object user
    let user = {
        userName: '',
        email: '',
        password: '',
        confirmpassword: ''
    }

    let error = [];

    const [userState, setuserState] = useState(user);
    const [errorState, seterrorState] = useState(error);
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
        } else if(!checkPassword()){
            seterrorState((error) => error.concat({message: "Password is not valid "}))
            return false;
        }
        return true;
    } 

    const isFormValidate = () => {
        return !userState.userName.length || 
        !userState.email.length || 
        !userState.password.length || 
        !userState.confirmpassword.length
    }

    const checkPassword = () => {
        if(userState.password.length < 8){
            seterrorState((error) => error.concat({ message: "Password lenght be greater than 8"}));
            return false
        } else if (userState.password !== userState.confirmpassword){
            seterrorState((error) => error.concat({ message: "Passsword and ConfirmPassword doesn't match"}));   
            return false;
        } 
        return true;
    }

    const onSubmit = (event) => {
        seterrorState(() => [])
        if(checkForm()){

        }  
    }
    const formatError = () => {
        // console.log(errorState);
        // console.log(error)
        return errorState.map((error, index) => <p key={index}>{error.message}</p>)
    }
    return (
        <Grid verticalAlign="middle" textAlign="center">
            <Grid.Column style={{maxWidth: "500px",marginTop:"40px"}}>
                <Header icon as="h2">
                    <Icon name="slack">
                        Register
                    </Icon>
                </Header>
                <Form onSubmit={onSubmit}>
                    <Segment stacked>
                        <Form.Input 
                        name="userName"
                        value={userState.userName}
                        icon="user"
                        iconPosition="left"
                        onChange = {handleInput}
                        placeholder = "user name"
                        required="true"
                        />
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
                        <Form.Input 
                        name="confirmpassword"
                        type="password"
                        value={userState.confirmpassword}
                        icon="lock"
                        iconPosition="left"
                        onChange = {handleInput}
                        placeholder = "Confirm Password"
                        required="true"
                        />
                    </Segment>
                    <Button>Submit</Button>
                </Form>
                {errorState.length > 0 && <Message error>
                    <h3>Error</h3>
                    {formatError()}
                </Message> 
                }
            </Grid.Column>
        </Grid>
    )
}

export default Register;