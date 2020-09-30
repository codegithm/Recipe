import React from 'react';
import Navbar from './navbar.component'
import About from './profile/about.component'
export default class Recipes extends React.Component{
    render(){
        return(
            <div>
                 <Navbar />
                 <div className='container'>
                    <About />
                 </div>
            </div> 
        )
    }
}