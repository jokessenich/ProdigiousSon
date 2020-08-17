import React from 'react';
import './Blog.css'

export default class Blog extends React.Component{


render(){
    return(
        <div>
        <h1> Blog </h1>
        <div className = "postContainer">

        <h2 className = "blogTitle">Official Release Date Approaching</h2>
        <h3>August 16th 2020</h3>
        <p className = "blogPost">On August 22nd we will be celebrating the official release of Prodigious Son: A Memoir of Miracles by Ralph "Corky" Matson and transcribed by John Kessenich!! <br /> <br />

        Please click <a href ="https://tinyurl.com/prodigioussonbookamazon">HERE</a> to purchase on Amazon!<br /><br /> <br />

        <a href = "https://www.youtube.com/watch?v=iAVSoPTqpVU&t=73s">Click here</a>  for an interview with Ralph "Corky" Matson on YouTube.<br /> <br />

        We will stream a live interview on the Facebook Page at 1 PM PDT, 4 PM EST. <a href = "https://www.facebook.com/events/657893901747327/">Click here</a> to watch!
        </p>
        </div>
        </div>
    )
}
}
