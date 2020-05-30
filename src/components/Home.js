import React from 'react';
import './Home.css'
export default class Home extends React.Component{


render(){
    return(
        <div className = "page">
                    <h1 className = "title" >Prodigious Son: A Memoir of Miracles</h1>
        <h2>Ralph Matson</h2>
        <h3 className="transcribed">Transcribed by: John Kessenich</h3>
                  {/*  <h1> Prodigious Son </h1>
        <h2>A Memoir of Miracles</h2>
            <div className = 'corky-image'></div>
    */}
    <div className ="picDescriptionBox">
        <div className="bookCoverDiv">
<img className = "bookImage" src = 'https://github.com/jokessenich/corky/blob/master/Prodigious%20Son%20BOOK%203D.jpg?raw=true' height='300' width = '200' />
</div>
<div className = "about-book">
        <p><span className="emphasize-text">How many times can you cheat death </span>on your path to
                enlightenment? Meet Ralph "Corky" Matson, a modern-day
                urban shaman who consistently beats the odds. In this
                captivating memoir, Matson leads us through Woodstock,
                down drug alleys, over mountain ashrams and around
                gamblers on a never-ending quest for higher consciousness
                as he struggles with his inner demons—and angels. {<br />}{<br />}Born to
                a devoted mother who struggled to protect him from the
                unjustified hatred of a tyrannical father, Matson grew up in
                poverty with a negative self-image that haunted him even as
                he associated with remarkable people such as Ram Dass,
                Timothy Leary, Rammurti S. Mishra, Swami Rama, Elias
                DeMohan and Patricia Cota Robles. His many brushes with
                death, including accidents, tumors, overdoses and heart
                failure only confirmed his spiritual beliefs and demonstrated
                the miraculous power of healing. Journey with him as he not
                only overcomes the hardships of an uncertain early life, but
                grieves the loss of two wives to illness and forgives the
                
                father who tormented him. There is a tangible love felt in
                these pages, for every character we encounter. Even in his
                depictions of heartbreak or cruelty, Matson generously
                renders a world—and a philosophy—of devotion, kindness,
                and perseverance that is the underlying thread of his life
                story. Edgy, yet inspirational, Prodigious Son: A Memoir of
                Miracles offers hope and spiritual awakening in the middle of
                despair.</p>
        </div>        
        </div>

        <div className="corky-image"><div className="overlay"><p className="overlayText">"My awareness was at a pinpoint. There was no thinking, no experiencing; there was no nothing. There was me in the light as part of the light and no thought."</p></div></div>
        <div className="infoBox">
         
      
            <h3>“Never have I had the pleasure of reading a memoir so thoughtful in its understanding of humanity, the preservation of memory, and a feeling of optimism that compels you to leave its pages rejuvenated and optimistic about what there is to come.” </h3>
                <h4>– Sarah Tierney, copy editor</h4>
                <br />
<h3>"<span className="italic">Prodigious Son</span> is an honest and insightful look into a life well-lived and filled with colorful tales.”</h3>

<h4>– Jack Bornoff, screenwriter</h4>
<br />
<h3>“<span className="italic">Prodigious Son</span> reflects hope in the face of catastrophe. Corky Matson is a remarkable person, soul and example of a life well lived.”</h3>
<h4>– Russell Jaffe, MD, Ph.D. CCN</h4>
<br />


        </div>
        </div>
    )
}
}
