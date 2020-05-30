import React from 'react';
import {Link} from 'react-router-dom'
import Header from './Header.css'
import Home from './components/Home'
import AboutAuthor from './components/AboutAuthor'
import Purchase from './components/Purchase'
import Media from './components/Media'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Photos from './components/Photos'
import {slide as Menu} from 'react-burger-menu'


export default class Main extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            isOpen:false
        }
    }

    handleStateChange (state){
        this.setState({isOpen:state.isOpen})
    }

    closeMenu=()=>{
        this.setState({
            isOpen:false
        })
    }

render(){
    let menuProp = this.state.isOpen
    
    return(
        <div>
        <div className="header">
        <ul className = "fullscreen-links">
            <li ><Link className="navLinks" to = '/'>Home</Link></li>
            <li><Link className="navLinks" to = '/About-Author'>Author</Link></li>
            <li><Link  className="navLinks" to = '/Purchase'>Purchase</Link></li>
            <li><Link  className="navLinks" to ='/Media'>Media</Link></li>
            <li><Link className="navLinks"  to = '/Blog'>Blog</Link></li>
            <li><Link className="navLinks" to = '/Contact'>Contact</Link></li>

            {//<li><Link className="navLinks" to = '/Photos'>Photos</Link></li>
}
        </ul>
        <Menu isOpen = {menuProp}
                       width = {'100%'}
                       right
                      onStateChange={(state) => this.handleStateChange(state)}>
                                      <li ><Link className="navLinks" to = '/' onClick = {this.closeMenu}>Home</Link></li>
            <li><Link className="navLinks" to = '/About-Author' onClick = {this.closeMenu}>Author</Link></li>
            <li><Link  className="navLinks" to = '/Purchase' onClick = {this.closeMenu}>Purchase</Link></li>
            <li><Link  className="navLinks" to ='/Media' onClick = {this.closeMenu}>Media</Link></li>
            <li><Link className="navLinks"  to = '/Blog' onClick = {this.closeMenu}>Blog</Link></li>
            <li><Link className="navLinks" to = '/Contact' onClick = {this.closeMenu}>Contact</Link></li>
        </Menu>
        </div></div>
    )
}
}
