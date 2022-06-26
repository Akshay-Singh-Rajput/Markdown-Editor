import React from 'react'
import { useState } from 'react';
import ReactMarkdown from 'react-markdown'
export const Markdown = () => {
    const [text, setText] = useState("welcome to mark down")
  return (
    <div>
        <textarea className="left-side" id="" cols="30" rows="10" value={text}  onChange={(e) => setText(e.target.value)}> 
        </textarea>
            <div className='right-side'>
              <ReactMarkdown>{ text }</ReactMarkdown>
                </div>
    </div>
  )
}
