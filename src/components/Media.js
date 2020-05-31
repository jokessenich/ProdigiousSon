import React from 'react';
import './Media.css'

export default class Media extends React.Component{


render(){
    return(
        <div>
        <h1> Media Information</h1>
        <h3>For interviews of the author or book reviews please contact Sound Visions Media at: <br /><br />
<a href = "mailto:soundsvisionsmedia@gmail.com">soundvisionsmedia  (at)  gmail.com </a>
        <br />
        <br />
        For Media/Press information please download the EPK that includes:
        <ul className = "mediaList">
        <li><a href= "https://github.com/jokessenich/corky/raw/master/Press%20One%20Page_Prodigious%20Son_PRINT.pdf" download = "Press_One_Page_ProdigiousSon">Media One Page</a></li>
        <li><a href= "https://github.com/jokessenich/corky/raw/master/BIO%20Press.pdf" download = "RalphMatsonBio">Author Bio</a></li>
        <li><a href = "https://github.com/jokessenich/corky/raw/master/PRESS%20RELEASE_Prodigious%20Son%20.pdf" download = "PressRelease_ProdigiousSon">Press Release</a></li>
        <li>Photos</li>
        <li>Interview Questions</li>
        </ul></h3>
        </div>
    )
}
}
