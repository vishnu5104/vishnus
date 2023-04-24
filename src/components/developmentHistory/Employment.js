import React from 'react'
import Lists from './Lists'

function Employment() {
    const obj = [
        {
            year: "2022 - 2023",
            heading: "Frontend Developer",
            subheading: "Hirable",
            description: "Developing and implementing web applications using Next.js framework, collaborating with the design and backend teams to ensure seamless integration of the front-end and back-end, and optimizing website performance and user experience. Additionally, I was responsible for identifying and resolving technical issues, debugging code, and ensuring that the web application was scalable and maintainable."
        },
      
    ]
  return (
    <section className='intro'>
      <div className="container">
        <h2>Employment</h2>
        <Lists obj={obj}/>
      </div>
    </section>
  )
}

export default Employment
