import React from 'react';
import './Media.css'
import corky from '../Photos/Corky-Jacket_Photo_Retouched_PROOF.jpg'
import youngCorky from '../Photos/young-corky_BW_Retouched.jpg'

export default class Media extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hidden: true,
            showPhoto: false
        }
    }

render(){
    return(
        <div>
        <h1> Media Information</h1>
        <h3>For interviews of the author or book reviews please contact Sound Visions Media at: <br /><br />
            {this.state.hidden?<span onClick = {()=>{this.setState({hidden: false})}}>Click here for contact info</span>:""}
            {this.state.hidden? "":<a href = "mailto:soundsvisionsmedia@gmail.com">soundvisionsmedia  (at)  gmail.com </a>}
        <br />
        <br />
        For Media/Press information please download the EPK that includes:
        <ul className = "mediaList">
        <li><a href= "https://github.com/jokessenich/corky/raw/master/Press%20One%20Page_Prodigious%20Son-2.1.pdf" download = "Press_One_Page_ProdigiousSon">Media One Page</a></li>
        <li><a href= "https://github.com/jokessenich/corky/raw/master/BIO%20Press.pdf" download = "RalphMatsonBio">Author Bio</a></li>
     {//   <li><a href = "https://github.com/jokessenich/corky/raw/master/PRESS%20RELEASE_Prodigious%20Son%20.pdf" download = "PressRelease_ProdigiousSon">Press Release</a></li>
}
        <li><a className = "MediaPhotosButton" onClick = {()=>{this.setState({showPhoto: true})}}>Photos</a>
        {this.state.showPhoto? <ul className = "photosList"><li>Click to Download:</li><li><a href = {corky} download = "Ralph_Matson.jpg"><img src= {corky} width="150" height = "125" /> </a></li>
        <li><a href = {youngCorky} download="Young_Ralph_Matson"><img src= {youngCorky} width="150" height = "200" /></a></li>
        </ul>:""}
        </li>
        <li>Interview Questions</li>
        </ul></h3>
        </div>
    )
}
}
