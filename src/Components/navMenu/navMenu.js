import React, { Component } from 'react';
import MenuItem from './menuItem'
import './styleNavMenu.css';

class Menu extends Component {
    render(){
        return (
            <div className='navMenu'>
                <ul>
                    <MenuItem key='home' name='Inicio' category='home' selected={true}></MenuItem>
                    <MenuItem key='myProjects' name='Mis Proyectos' category='myProjects' selected={false}></MenuItem>
                    <MenuItem key='contact' name='Contacto' category='contact' selected={false}></MenuItem>
                </ul>
            </div> 
        )
    }
}

export default Menu;