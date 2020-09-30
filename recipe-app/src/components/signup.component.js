import React from 'react';
export default class Signup extends React.Component{
    constructor(props){
        super(props);

    }

        render(){
            return(
            <div>
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <h3 className='navbar-brand'>Recipe Book</h3>
            </nav>
            <br />
            <div className="container">
            <h3>Sign up</h3>
            <form>
                <div className='form-group'>
                    <label>Name :</label>
                    <input
                    className='form-control'
                    required
                    type= 'text'></input>
                </div>
                <div className='form-group'>
                    <label>Surname :</label>
                    <input
                    className='form-control'
                    required
                    type= 'text'></input>
                </div>
                <div className='form-group'>
                    <label>Email :</label>
                    <input
                    className='form-control'
                    required
                    type= 'text'></input>
                </div>
                <div className='form-group'>
                    <label>Password :</label>
                    <input
                    className='form-control'
                    required
                    type= 'password'></input>
                </div>
                <br />
                <div className='form-group'>
                    <input
                    className='btn btn-primary'
                    required
                    type= 'submit'
                    value='Sign up'></input>
                </div>
            </form>
            </div>
        </div>
        )
           
    }
}