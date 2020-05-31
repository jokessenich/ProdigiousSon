import React from 'react';
import "./purchase.css"
export default class Purchase extends React.Component{


render(){
    return(
        <div>
        <h1> Purchase </h1>
        <h2 className="purchase-date">Prodigious Son: A Memoir of Miracles by Ralph Matson <br />will be released on <span className = "bold">June 24, 2020.</span></h2>

<h3>Pre-Sale Orders available now at <a href ="https://www.amazon.com/Prodigious-Son-Ralph-Corky-Matson-ebook/dp/B088TVSKWM/ref=tmm_kin_title_0?_encoding=UTF8&qid=1590941068&sr=8-1" >Amazon.com</a>

<br />
<br />
Paperback: ISBN: 9781098308872
$18.99 (US)
<br />
<br />

eBook: ISBN: 9781098308889
$4.99 (US)</h3>
        <img src= "https://github.com/jokessenich/corky/blob/master/Prodigious%20Son%20BOOK%203D.jpg?raw=true" width="300" height = "450" />

        </div>
    )
}
}
