import React from 'react'

function Skills() {
    const skillsData = [
        {
            skill: "React",
            proficiency: "80",
        },
        {
            skill: "Javascript",
            proficiency: "90",
        },
        {
            skill: "Typescript",
            proficiency: "75",
        },
        {
            skill: "Blockchain",
            proficiency: "80",
        },
        {
            skill: "Solidity",
            proficiency: "60",
        },
        {
            skill: "GIT",
            proficiency: "80",
        },
        {
            skill: "API DEVELOPMENT",
            proficiency: "70",
        },
        {
            skill: "FIGMA",
            proficiency: "80",
        },
    ]
  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        <ul>
            {skillsData.map((skill,ind) => (
                <li key={ind}>
                    <p>{skill.skill}</p>
                    <div className="progress-bar">
                        <div className='progress' style={{width: skill.proficiency+"%"}}></div>
                    </div>
                    <p className='percentage'>{skill.proficiency}%</p>
                </li>
            ))}
        </ul>
      </div>

</section>
  )
}

export default Skills
