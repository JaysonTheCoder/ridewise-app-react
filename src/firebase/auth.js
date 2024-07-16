import { auth } from "./firebase";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup, 
    sendPasswordResetEmail,
    updatePassword
} from "firebase/auth";

export const createUserEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}
export const signinEmailAndPassword = (email, password ) => {
    return signInWithEmailAndPassword(auth, email, password)
}
export const signinGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result;
};
export const SignOut = function() {
    return auth.signOut();
}

// export const passwordReset = function( email ) {
//     return sendPasswordResetEmail(auth, email);
// };

// export const changePassword = function(password) {
//     return updatePassword(auth.currentUser, password)
// }
// export const sendEmailVerification = function() {
//     return sendEmailVerification(auth.currentUser, {
//         url: `${window.location.origin}/`
//     })
// }