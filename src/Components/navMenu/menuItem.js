import React, { Component } from 'react';
import './styleNavMenu.css';

class MenuItem extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            name: this.props.name,
            category: this.props.category,
            selected: this.props.selected,
        }
    }
    
    handleItem = () =>{
        debugger;
    }
    
    render(){
        const { name, category, selected } = this.state
        return (
            <div>
                <li className='item'>
                    <a 
                        href={`#${category}`} 
                        onClick={this.handleItem}
                        className={selected ? 'itemSelected' : ''}>
                        {name}
                    </a>
                </li>
            </div> 
        )
    }
}

export default MenuItem;

