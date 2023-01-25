import React, { useState } from "react";
import Navbar from "./Navbar";

export default function TextForm(props) {
  const textChange = (ind) => {
    let updateText = text.toUpperCase();
    switch (ind) {
      case 1:
        setText(updateText);
        setCondition(true);
        break;
      case 2:
        setText(updateText.toLowerCase());
        setCondition(true);
        break;
      default:
        console.log("d");
        break;
    }
  };
  const [text, setText] = useState("");
  const [condition, setCondition] = useState(false);
  return (
    <>
    <Navbar title={'Prashant'}/>
    <div className="form-group container" >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          rows={6}
          value={text}
          onChange={(value) => setText(value.target.value)}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={() => textChange(1)}>
        convert to upperCase
      </button>
      <button className="btn btn-primary" style={{marginLeft:'5px'}} onClick={() => textChange(2)}>
        convert to lowerCase
      </button>
      <h1>
        Your Text Summarry
      </h1>
      <p1>
        { condition && text}
      </p1>
    </div>
    </>
  );
}
