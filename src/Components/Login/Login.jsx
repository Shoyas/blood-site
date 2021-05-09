import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    var googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = () => {
        firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
            let credential = result.credential;
            let token = credential.accessToken;
            let user = result.user;

            const {displayName, photoURL, email} = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
            }
            setLoggedInUser(signedInUser);
            console.log(signedInUser);

        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            let email = error.email;
            let credential = error.credential;

        });
    }
    const handleSignOut = () => {
        firebase.auth().signOut()
        .then((res) => {
            const loggedOutUser = {
                isSignedIn: false,
                newUser: false,
                name: '',
                email: '',
                password: '',
                photo: '',
                error: '',
            }
            setLoggedInUser(loggedOutUser);
        })
        .catch((err) => {
            // An error happened.
        });
    }

    // // Create an account
    // const handleInput = (event) => {
    //     event.preventDefault();
    //     let isFieldValid = true;
    //     if(event.target.name === 'email'){
    //         isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
    //     }
    //     if(event.target.name === 'password'){
    //         const isPasswordValid = event.target.value.length > 6;
    //         const passwordHasNumber = /\d{1}/.test(event.target.value);
    //         isFieldValid = isPasswordValid && passwordHasNumber;
    //     }
    //     if(isFieldValid){
    //         const newUserInfo = {...loggedInUser};
    //         newUserInfo[event.target.name] = event.target.value;
    //         setLoggedInUser(newUserInfo);
    //     }
    // }
    // const handleLoginFormSubmit = (event) => {
    //     event.preventDefault();
    //     // console.log(user.email, user.password);
    //     if(newUser && loggedInUser.email && loggedInUser.password){
    //         firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
    //         .then((res) => {
    //             // console.log(res.user);
    //             const {displayName, email} = res.user;
    //             const signedInUser = {
    //                 isSignedIn: true,
    //                 name: displayName,
    //                 email: email,
    //                 error: '',
    //             }
    //             setLoggedInUser(signedInUser);
    //         })
    //         .catch((error) => {
    //             let errorCode = error.code;
    //             let errorMessage = error.message;

    //             const newUserInfo = {...loggedInUser};
    //             newUserInfo.error = errorMessage;

    //             console.log(errorMessage);
    //             setLoggedInUser(newUserInfo);
    //         });
    //     }
    //     else{
    //         alert('Enter right email or password...');
    //     }

    //     // sign in for creating account
    //     if(!newUser && loggedInUser.email && loggedInUser.password){
    //         firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
    //         .then((res) => {
    //             const {displayName, email} = res.user;
    //             const signedInUser = {
    //                 isSignedIn: true,
    //                 name: displayName,
    //                 email: email,
    //                 error: '',
    //             }
    //             setLoggedInUser(signedInUser);
    //         })
    //         .catch((error) => {
    //             var errorCode = error.code;
    //             var errorMessage = error.message;

    //             const newUserInfo = {...loggedInUser};
    //             newUserInfo.error = errorMessage;

    //             console.log(errorMessage);
    //             setLoggedInUser(newUserInfo);
    //         });
    //     }
    // }
    console.log(loggedInUser);


    return (
        <div style={{ 'text-align': 'center'}}>
            <h2>Sign in with google</h2>
            {
                loggedInUser.isSignedIn ?
                <button onClick={handleSignOut}>Sign out</button>
                :
                <button onClick={handleSignIn}>Sign in</button>
            }
            <br />
            <br />
            {/* <h2>Authentication</h2>
            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
            <label htmlFor="newUser">New User Sign up</label>
            <form action="" onSubmit={handleLoginFormSubmit}>
                {
                    newUser && 
                    <input type="text" onBlur={handleInput} name="name" placeholder="Your Name" />
                }
                <br />
                <input type="text" onBlur={handleInput} name="email" placeholder="Your Email" required />
                <br />
                <input type="password" onBlur={handleInput} name="password" placeholder="Your Password" required id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color: 'red'}}>{loggedInUser.error}</p> */}
        </div>
    );
};

export default Login;