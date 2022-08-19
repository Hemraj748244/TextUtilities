import React, { useState } from 'react';

export function TextArea(props) {
  let initialStyle = {};

  let darkmodeStyle = {
    backgroundColor: props.theme.bgcolor,
    color: props.theme.color,
  };



  let [text, setText] = useState('');

  let copyData = () => {
    let element1 = document.getElementById('sampletext');
    element1.select();
    document.execCommand('copy');
    props.alertData('Copied to clipboard', 'success');
  };

  let toUpCase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.alertData('Converted to UpperCase', 'success');
  };

  let onTextChange = (event) => {
    setText(event.target.value);
  };

  let toLowCase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.alertData('Converted to LowerCase', 'success');
  };

  let commaSeparate = () => {
    let txt1 = text.replaceAll(/\r?\n/gi, ',');
    setText(txt1);
  };

  let clearText = () => {
    setText('');
    props.alertData('Text Cleared', 'danger');
  };

  let removeExtraSpace = () => {
    let newtxt = text.replaceAll(/\s+/g, ' ').trim();
    setText(newtxt);
    props.alertData('Extra Spaces removed', 'success');
  };
  return (
    <div style={props.viewMode == 'dark' ? darkmodeStyle : initialStyle}>
      <div className="container">
        <h1>{props.textHeading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            className="form-control"
            id="sampletext"
            rows="12"
            onChange={onTextChange}
            style={props.viewMode == 'dark' ? darkmodeStyle : initialStyle}
          ></textarea>
        </div>
        <div className="mb-12">
          <button className="btn btn-primary mx-2" onClick={toUpCase}>
            UpperCase
          </button>
          <button className="btn btn-primary mx-2" onClick={toLowCase}>
            LowerCase
          </button>
          <button className="btn btn-primary mx-2" onClick={commaSeparate}>
            Comma Seperate
          </button>
          <button className="btn btn-primary mx-2" onClick={removeExtraSpace}>
            Remove Extra Spaces
          </button>
          <button className="btn btn-primary mx-2" onClick={clearText}>
            Clear
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h1>Summery : </h1>
        <p>
          <b>Word Count :</b> {text.split(' ').length} <b>Character Count :</b>{' '}
          {text.length}
        </p>
        <div className="row">
          <div className="col-sm-6">
            <h2>Text Preview :</h2>
          </div>
          <div className="col-sm-6 my-2">
            <button
              className="btn btn-primary align-self-end"
              id="copyData"
              onClick={copyData}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-clipboard"
                viewBox="0 0 16 16"
              >
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="container my-2">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
