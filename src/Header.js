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

export default class Main extends React.Component{


render(){
    return(
        <div><h1>Prodigious Son</h1>
        <h2>A Memoir of Miracles</h2>
        <div className="header">
        <ul>
            <li ><Link className="navLinks" to = '/'>Home</Link></li>
            <li><Link className="navLinks" to = '/About-Author'>Author</Link></li>
            <li><Link  className="navLinks" to = '/Purchase'>Purchase</Link></li>
            <li><Link  className="navLinks" to ='/Media'>Media</Link></li>
            <li><Link className="navLinks"  to = '/Blog'>Blog</Link></li>
            <li><Link className="navLinks" to = '/Contact'>Contact</Link></li>

            {//<li><Link className="navLinks" to = '/Photos'>Photos</Link></li>
}
        </ul>
        </div></div>
    )
}
}
