import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});

        } catch (err) {
            console.log(err);
        }
    }
    render() {
        const { email, password } = this.state;
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='email'
                        name='email'
                        label='email'
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        label='password'
                        value={password}
                        onChange={this.handleChange}
                        required
                    />
                    <div className="buttons">
                        <CustomButton
                            type='submit'
                        >
                            Sign In
                        </CustomButton>
                        <CustomButton
                            onClick={signInWithGoogle}
                            isGoogleSignIn
                        >
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;