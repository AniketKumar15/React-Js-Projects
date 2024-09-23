import React, { useState, useEffect } from 'react'
import axios from "axios"
import Loader from "./Loader";

const ChatAera = () => {

  const [prompt, setPrompt] = useState();
  const [result, setResult] = useState('');
  const [displayedText, setDisplayedText] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isShow, setShow] = useState(false);

  const callApi = async () => {
    setShow(true);
    setLoading(true);
    const res = await axios({
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${import.meta.env.VITE_API_KEY}`,
      method: "POST",
      data: {
        contents: [
          {
            parts: [
              { text: prompt }
            ]
          }
        ]
      },
    })
    setLoading(false);
    // console.log(res['data']['candidates'][0]['content']['parts'][0]['text']);
    setPrompt("");
    if(displayedText !== ''){
      setDisplayedText("");
    }
    setResult(res['data']['candidates'][0]['content']['parts'][0]['text']);
  }

  const renderText = (input) => {
    const lines = input.split('\n');

    return lines.map((line, index) => {
      // Check for headings (##)
      if (line.startsWith('## ')) {
        const content = line.replace('## ', ''); // Remove the ## marker
        return (
          <strong key={`heading-${index}`} style={{ display: 'block', marginBottom: '0.5em' }}>
            {content}
          </strong>
        );
      }

      // Handle bold text (**)
      const parts = line.split(/(\*\*.*?\*\*)/g); // Split by bold markers
      return (
        <span key={`line-${index}`}>
          {parts.map((part, i) =>
            part.startsWith('**') && part.endsWith('**') ? (
              <strong key={`bold-${i}`}>
                {part.replace(/\*\*/g, '')}
              </strong>
            ) : (
              part
            )
          )}
          <br /> {/* Line break after each line */}
        </span>
      );
    });
  };

  useEffect(() => {
    let index = -1;
    const typingInterval = setInterval(() => {
      if (index < result.length) {
        setDisplayedText((prev) => prev + result.charAt(index));
        index += 1;
      } else {
        clearInterval(typingInterval);
      }
    }, 5); // Adjust typing speed here (5 ms per character)
    
    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, [result]);

  const copyText = () => {
    navigator.clipboard.writeText(displayedText);
    alert("Text copied.")
  }

  return (
    <div className='container mx-auto py-2 px-3'>
      <h1 className='flex items-center justify-center gap-3 mb-3 text-2xl font-black mt-16'>AI Text Generator</h1>
      <textarea onChange={(e)=>{setPrompt(e.target.value)}} value={prompt} rows={5} name="Input_field" className='w-full shadow-lg border-black border-[1px] rounded-lg py-2 px-3 outline-none mb-5'></textarea>
      <button onClick={callApi} type="button" className="text-white shadow-lg w-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">GO</button>

      
      {isShow && <div className='border-black border-[1px] shadow-lg rounded-lg pt-4 px-4 mt-5 w-full'>
        {isLoading && <Loader/> }  
        {!isLoading && result && <pre className="whitespace-pre-wrap break-words">
          {renderText(displayedText)}
        </pre>}
        <button type="button" onClick={copyText}
        className={`text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 my-2 shadow-lg `}>Copy</button>

        <button type="button" onClick={() => {setDisplayedText(''); setShow(false)}} className={`text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 my-2 shadow-lg`}>Clear</button>
      </div>}
    </div>
  )
}

export default ChatAera