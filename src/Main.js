import React from 'react';
import { Switch, Route } from 'react-router-dom'
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
        <div>
            <Switch>
                <Route exact path = '/' component = {Home}></Route>
                <Route path = '/about-author' component = {AboutAuthor}></Route>
                <Route path = '/purchase' component = {Purchase}></Route>
                <Route path = '/media' component = {Media}></Route>
                <Route path = '/contact' component = {Contact}></Route>
                <Route path = '/blog' component = {Blog}></Route>
                <Route path = '/photos' component = {Photos}></Route>
            </Switch>
        </div>
    )
}
}
