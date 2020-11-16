import React , {useState} from 'react'
import { Link } from 'react-router-dom';
import {Grid, Form, Segment, Icon, Header, Button, Message} from 'semantic-ui-react';
import firebase from '../../../server/firebase';
const Register = () => {

    // Create a Object user
    let user = {
        userName: '',
        email: '',
        password: '',
        confirmpassword: ''
    }

    let error = [];

    const userCollectionRef = firebase.database().ref('users');

    const [userState, setuserState] = useState(user);
    const [errorState, seterrorState] = useState(error);
    const [isLoading, setisLoading] = useState(false);
    const [isSuccess, setisSuccess] = useState(false);

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
        setisLoading(true)
        setisSuccess(false)
        seterrorState(() => [])
        if(checkForm()){
            firebase
            .auth()
            .createUserWithEmailAndPassword(userState.email, userState.password)
            .then(createduser => {
                setisLoading(false)
                updateuserdetails(createduser);
                alert("SuccessFully Register");
            })
            .catch(servererror => {
                setisLoading(false)
                seterrorState((error) => error.concat(servererror))
                // console.log(servererror);
            })
        }  
    }
    const updateuserdetails = (createduser) => {
        if(createduser){
            setisLoading(true)
            createduser.user
            .updateProfile({
                displayName: userState.userName,
                profileURL: `http://gravatar.com/avatar/${createduser.user.uid}?d=identicon`
            })
            .then(() => {
                setisLoading(false)
                saveuserInDB(createduser)
            })
            .catch((ServerError) => {
                setisLoading(false)
                seterrorState((error) => error.concat(ServerError))
                // console.log(servererror)
            })
        }
    }

    const saveuserInDB = (createduser) => {
        setisLoading(true)
        userCollectionRef.child(createduser.user.uid).set({
            displayName: createduser.user.displayName,
            photoURL: createduser.user.photoURL
        })
        .then(() => {
            setisLoading(false);
            setisSuccess(true);
            console.log("user is created")
        })
        .catch((servererror) => {
            setisLoading(false)
            seterrorState((error) => error.concat(servererror))
        })
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
                    <Button disabled={isLoading} loading={isLoading}>Submit</Button>
                </Form>
                {errorState.length > 0 && <Message error>
                    <h3>Error</h3>
                    {formatError()}
                </Message> 
                }
                {isSuccess && <Message success>
                    <h3>SuccessFully Register</h3>
                    {/* {formatError()} */}
                </Message> 
                }
                <Message>
                    Already a User? <Link to="/login">Login</Link>
                </Message>
            </Grid.Column>
        </Grid>
    )
}

export default Register;