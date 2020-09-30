import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component{
    render(){
        return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to='/' className="navbar-brand">Recipe Book</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                    <Link to='/' className="nav-link">Recipes</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/create' className="nav-link active">Create Recipe</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/profile' className="nav-link active" >Profile</Link>
                    </li>
                </ul>
            </div>
        </nav>
        )
    }
}