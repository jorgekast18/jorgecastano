import React, { Component } from 'react';
import MenuItem from './menuItem'
import './styleNavMenu.css';


class Menu extends Component {
    onClickItem(){
        debugger;
    }
    render(){
        return (
            <div className='navMenu'>
                <ul>
                    <MenuItem name='Inicio' category='home'></MenuItem>
                    <MenuItem name='Mis Proyectos' category='myProjects'></MenuItem>
                    <MenuItem name='Contacto' category='contact'></MenuItem>
                </ul>
            </div> 
        )
    }
}

export default Menu;