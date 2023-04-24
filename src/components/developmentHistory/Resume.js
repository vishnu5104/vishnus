import React from 'react'
import Lists from './Lists'

function Resume() {
    const obj = [
        {
            year: "2019 - 2023",
            heading: "B.Tech in Computer Science and Engineering",
            subheading: "College Of Engineering Karunagappally",
            description: "Google DSC Lead: As the Lead for Google Developer Student Club in my college. Organized workshops to promote the use of Google technologies and empower students with the skills needed to succeed in the tech industry."
        }
    ]
  return (
    <section className='intro'>
      <div className="container">
        <h2>Education</h2>
        <Lists obj={obj}/>
      </div>
    </section>
  )
}

export default Resume
