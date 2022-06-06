import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText); 
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText); 
  }

  const speakClick = ()=> {
    let msg = new SpeechSynthesisUtterance(); //convert to speech
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const handleinverse = ()=> {
    let newText = "";
    for(let i = 0; i<text.length; i++)
    {
      if(text.charAt(i) >= 'a' && text.charAt(i) <= 'z')
      {
        newText += text.charAt(i).toUpperCase();
      }
      else if(text.charAt(i) >= 'A' && text.charAt(i) <= 'Z')
      {
        newText += text.charAt(i).toLowerCase();
      }
    }
    setText(newText);
  }

  const onChangeHandler = (event)=> {
    setText(event.target.value);  //setting value of text to whatever written in textarea
  }

  const [text, setText] = useState("enter text here");

  return (
    <>
    <div className="container" style = {{color: props.mode==='dark'?'white':'#052e6b'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
            <textarea className="form-control" style = {{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'052e6b'}} value={text} onChange = {onChangeHandler} id="mybox" rows="3"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>convert to lowercase</button>
        <button className="btn btn-warning mx-1" onClick={handleinverse}>inverse case</button>
        <button className="btn btn-warning mx-1" onClick={speakClick}>Speak</button>
    </div>
    <div className="container my-3 " style = {{color: props.mode==='dark'?'white':'#052e6b'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
