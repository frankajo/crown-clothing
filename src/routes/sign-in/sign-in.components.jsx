
import { signInWithGooglePopup, creatUserDocFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {

    const googleUserRef = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await creatUserDocFromAuth(user);
    }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={googleUserRef}>Sign In With Google</button>
        </div>
    )
}
export default SignIn;