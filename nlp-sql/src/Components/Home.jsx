import React from 'react'
import "./Homestyle.css"
import Features from './Features'

export default function Home() {
  return (
    <div>
      <div className="home">
         <div className="home-image text-center">
         <div className="text text-center">
          <h1 className='title text-center'>NLP <span>to</span> SQL <span>Query Execution</span> </h1>
         <p>Convert Natural Language queries into SQL effortlessly <br />using Machine Learning.
          </p>
          <button className='btn-home'>Learn More</button>
        </div>
         </div>
      </div>
      <Features/>
    </div>
  )
}
