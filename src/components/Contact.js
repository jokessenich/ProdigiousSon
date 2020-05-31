import React from 'react';

export default class Contact extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            hidden: true
        }
    }


render(){
    return(
        <div>
        <h1>Contact</h1>
        {this.state.hidden?<h2 onClick = {()=>this.setState({hidden:false})}>Click here for contact information</h2>:""}
        {this.state.hidden?'':<div id = "contactInfo">
            <h3>For Media including reviews and interviews contact: <br /><br /><a className="emailLink" href="mailto:soundvisionsmedia@gmail.com">soundvisionsmedia (at) gmail.com </a></h3>
        <h3> To reach the author directly, contact:</h3>
        <a className="emailLink" href="mailto:ProdigiousSonBook@gmail.com"><h3>ProdigiousSonBook (at) gmail.com</h3></a>
        </div>}
        </div>
    )
}
}
