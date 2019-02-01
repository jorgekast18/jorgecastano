import React from 'react';
import './styleNavMenu.css';


const MenuItem = ({ name, category}) => {

    const handleItem = () =>{
        debugger;
    }
    return (
        <div>
            <li className='item'>
                {/* <h3>{name}</h3> */}
                <a href={category} onClick={handleItem()}>{name}</a>
            </li>
        </div> 
    )
    
}

export default MenuItem;