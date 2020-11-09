import React , {useState} from 'react'
import {Grid, Form, Segment, Icon, Header, Button, Message} from 'semantic-ui-react';

const Register = () => {

    // Create a Object user
    let user = {
        userName: '',
        email: '',
        password: '',
        confirmpassword: ''
    }

    let error = [{message:"Fields are required"}];

    const [userState, setuserState] = useState(user);
    const [errorState, seterrorState] = useState(error);
    const handleInput = (event) => {
        // console.log("but clicked")
        let target = event.target;
        setuserState((currentState) => {
            let currentuser = {...currentState};
            currentuser[target.name] = target.value 
            return currentuser;
        })
    }

    const checkForm = () => {
        if(isFormValidate()){
            seterrorState((error) => error.concat({message: "Field are requied"}))
            // console.log("Working");
            return false;
        } else if(checkPassword()){
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
            return false
        } else if (userState.password !== userState.confirmpassword){
            return false;
        } 
        return true;
    }

    const onSubmit = (event) => {
        if(checkForm()){

        } else {

        }    
    }
    const formatError = () => {
        // console.log(errorState);
        // console.log(error)
        errorState.map((error, index) => {
            <p key={index}>
                {error}
            </p>
        })
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
                        />
                        <Form.Input 
                        name="email"
                        value={userState.email}
                        icon="mail"
                        iconPosition="left"
                        onChange = {handleInput}
                        placeholder = "user Email"
                        />
                        <Form.Input 
                        name="password"
                        value={userState.password}
                        icon="lock"
                        iconPosition="left"
                        onChange = {handleInput}
                        placeholder = "Password"
                        />
                        <Form.Input 
                        name="confirmpassword"
                        value={userState.confirmpassword}
                        icon="lock"
                        iconPosition="left"
                        onChange = {handleInput}
                        placeholder = "Confirm Password"
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