import React from 'react';
import "./purchase.css"
export default class Purchase extends React.Component{


render(){
    return(
        <div>
        <h1> Purchase </h1>
<br />
        <h2>Pre-Sale Orders available now on <a href ="https://www.amazon.com/Prodigious-Son-Ralph-Corky-Matson/dp/1098308875/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1590941068&sr=8-1" target="_blank">Amazon.com</a></h2>
<h3>
<br />
<br />
Paperback: ISBN: 9781098308872
$18.99 (US)
<br />
<br />

eBook: ISBN: 9781098308889
$4.99 (US)</h3>

        <h3>Prodigious Son: A Memoir of Miracles by Ralph Matson <br />will be released on August 22, 2020.</h3>

        <img className ="book-sale" src= "https://github.com/jokessenich/corky/blob/master/Prodigious%20Son%20BOOK%203D.jpg?raw=true" width="300" height = "450" />

        </div>
    )
}
}
