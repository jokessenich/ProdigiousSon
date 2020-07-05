import React from 'react';
import './Footer.css';
export default class Main extends React.Component{


render(){
    return(
        <div className = "footer">

        <h3>Available August 22nd!! Preorder now from <a className = "bold" href = "https://www.amazon.com/Prodigious-Son-Ralph-Corky-Matson/dp/1098308875/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1593921951&sr=8-1">Amazon</a>. Follow us on Facebook!</h3>
        <a className = "facebook-icon" href = "https://www.facebook.com/ProdigiousSonMemoir" target = "_blank"><img src = "http://clipart-library.com/images_k/facebook-icon-transparent-background/facebook-icon-transparent-background-20.png" height = "50" width = "50"></img>
        </a>
        </div>
    )
}
}
