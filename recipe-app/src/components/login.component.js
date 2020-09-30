import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component{
    constructor(props){
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            email: "",
            password: ""
        }
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }
    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const checkUser = this.state;
        console.log(checkUser)

        this.setState({
            email: '',
            password:''
        });

        window.location = './'
    }

    
        render(){
            return(
            <div>
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <h3 className='navbar-brand'>Recipe Book</h3>
            </nav>
            <br />
            <div className="container">
            <h3>Login</h3>
            <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                    <label>Email :</label>
                    <input
                    className='form-control'
                    required
                    type= 'text'
                    onChange={this.onChangeEmail}></input>
                </div>
                <div className='form-group'>
                    <label>Password :</label>
                    <input
                    className='form-control'
                    required
                    type= 'password'
                    onChange={this.onChangePassword}></input>
                </div>
                <br />
                <div className='form-group'>
                    <input
                    className='btn btn-primary'
                    required
                    type= 'submit'
                    value='Login'></input>
                </div>
            </form>
            <Link to='/signup'>Sign up </Link>
            <span><p>If you don't have an account</p></span>
            </div>
        </div>
        )
           
    }
}