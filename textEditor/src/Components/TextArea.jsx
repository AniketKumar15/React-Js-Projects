import React, { useState } from 'react'
import TooltipBtn from './TooltipBtn'

const TextArea = ({setAlert}) => {

  const [text, setText] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setItalic] = useState(false);
  const [isUnderLine, setUndeLine] = useState(false);

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    setAlert("Converted to uppercase");
  }
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    setAlert("Converted to lowercase");
  }

  const handleBold = () => {
    setIsBold(!isBold);
    setAlert(`${isBold === true ? 'Undo the bold' : 'Converted to bold'}`);
  }
  const handleItalic = () => {
    setItalic(!isItalic);
    setAlert(`${isItalic === true ? 'Undo the italic' : 'Converted to italic'}`);
  }
  const handleUnderline = () => {
    setUndeLine(!isUnderLine);
    setAlert(`${isUnderLine === true ? 'Undo the underline' : 'Adding the underline'}`);
  }
  const handleClear = () => {
    setText("");
    setAlert("All text has been clear");
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setAlert("Text copied");
  }

  const handleSpace = () => {
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "))
    setAlert("All extra space has been removed");
  }

  return (
    <>
      <div className='container mx-auto mt-5 p-5 bg-green-100 shadow-lg'>
        <h1 className='text-[34px]'>Enter Text Here</h1>
        <textarea className='bg-transparent border-2 border-black resize-y container p-3 min-h-40' rows={10} placeholder='Enter Your Text' value={text} onChange={handleOnChange} 
        style={{ 
          fontWeight: isBold ? 'bold' : 'normal', 
          fontStyle : isItalic ? "italic" : 'normal',
          textDecoration: isUnderLine ? "underline" : "none"
          }}></textarea>

        <div id="btnContainer" className='mt-3 flex justify-start gap-2 flex-wrap'>
          <TooltipBtn btnName="Uppercase" toolTip="Uppercase" workGiven = {handleUpperCase}/>
          <TooltipBtn btnName="Lowercase" toolTip="Lowercase" workGiven = {handleLowerCase}/>
          <TooltipBtn btnName="Bold" toolTip="Bold" workGiven = {handleBold}/>
          <TooltipBtn btnName="Italic" toolTip="Italic" workGiven = {handleItalic}/>
          <TooltipBtn btnName="Undeline" toolTip="Underline" workGiven = {handleUnderline} />
          <TooltipBtn btnName="Clear" toolTip="Clear" workGiven = {handleClear}/>
          <TooltipBtn btnName="Copy" toolTip="Copy Text" workGiven = {handleCopy}/>
          <TooltipBtn btnName="Remove Extra Space" toolTip="Remove Extra Space" workGiven = {handleSpace}/>
        </div>
      </div>

      <div className='container mx-auto bg-red-100 mt-5 p-5 shadow-lg'>
        <h1 className="text-[2rem] font-bold mb-3 underline">Text Summary</h1>
        <p>Text Count: {text.length}</p>
        <p>Word Count: {text.split(" ").length}</p>
        <h2 className='text-[1.5rem] my-3 underline'>Preview</h2>
        <p style={{ 
          fontWeight: isBold ? 'bold' : 'normal', 
          fontStyle : isItalic ? "italic" : 'normal',
          textDecoration: isUnderLine ? "underline" : "none"
          }}>{text ? text : "Your Text Preview is show here"}</p>
      </div>
    </>
  )
}

export default TextArea