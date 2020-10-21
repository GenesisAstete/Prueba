import React, { Component } from "react"
import firebase from "firebase"
import {auth, db} from '../firebase'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { Redirect } from "react-router-dom";

const createUserProfileDocument =async (user) => {
    if(!user) return;
    const userReference =  db.doc(`users/${user.uid}`);
    const snapShot =  await userReference.get();
    if(!snapShot.exists) {
        const {displayName, email, photoURL} = user;
        const createdAt = new Date();
        try {
            await userReference.set({
                displayName,
                email,
                createdAt,
                photoURL
            })
        } catch (error) {
            console.log(error)
        }
    }
    return userReference;
}
class ButtonGF extends Component {
    state = { isSignedIn: false }
    uiConfig = {
    signInFlow: "popup",
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
        signInSuccess: () => false
    }
    }
    componentDidMount = () => {
        auth.onAuthStateChanged(async userAuth => {
            if(userAuth) {
                const user = await createUserProfileDocument(userAuth);
                user.onSnapshot((snapshot) => {
                    this.setState({
                        id: snapshot.id,
                        ...snapshot.data(),
                    });
                });
                this.setState({ isSignedIn: !!user })
            } 
            this.setState(userAuth);
            console.log("user", userAuth)
        })
    }
    render() {
        return (
        <div className="App">
            {this.state.isSignedIn ? (
                <span>
                    <h1>Welcome {auth.currentUser.displayName}</h1>
                    <img
                    alt="profile"
                    src={auth.currentUser.photoURL}/>
                   <Redirect push to='/muro' />
                </span>
            ) : (
                <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={auth}
                />
            )}
        </div>
    )
    }
}
export default ButtonGF