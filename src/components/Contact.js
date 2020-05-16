import React from 'react';

export default class Contact extends React.Component{


render(){
    return(
        <div>
        <h1> Contact</h1>
        
        <form action="mailto:johnny.kessenich@gmail.com" method="post" enctype="text/plain" >
            FirstName:<input type="text" name="FirstName" /> <br /><br />
            Email:<input type="text" name="Email" />
            <br />
            <br />
            Message:<br /><textarea cols='40' rows='10' />
            <br />
            <input type="submit" name="submit" value="Submit" />
            
            </form>

        </div>
    )
}
}
