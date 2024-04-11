import React, { useState, useEffect } from "react";
import { Text, View, Image, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { getAuth, signInWithCredential, User, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import * as WebBrowser from 'expo-web-browser';




WebBrowser.maybeCompleteAuthSession();


const Login = ({ setUser = (user: User) => { } }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const SignUp = async () => {
        console.log("here")
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("done")
                setUser(userCredential.user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    const SignInE = async () => {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
            })
            .catch((error) => {
                console.log(error.message)
            });
    }


    return (
    <View>
            <Text>Sign In</Text>
            <Text>With Email</Text>
            <View>
                <TextInput
                    id="email"
                    placeholder="Email"
                    onChangeText={setEmail}
                    value={email}
                />   
                <TextInput
                    id="password"
                    placeholder="Password"
                    onChangeText={setPassword}
                    value={password}
                />
                    <View>
                        <Pressable onPress={() => { SignUp() }}><Text>Register this account</Text></Pressable>
                        <TouchableOpacity
                            onPress={() => { SignInE() }}>
                        
                            </TouchableOpacity>
                    </View>
            </View>
        </View >
        
    
    );
};

export default Login;