import React,{useState} from 'react'
import {tabLink,tabData} from "./data"
function MyProjects() {
    const [active,setActive] = useState(0)
    const [tabState,setTabState] = useState(tabData)
    const handleTab = (index,link) => {
        setActive(index)
        if(link !== "All") {
            const temp = tabData.filter(data => {
                return data.type === link
            })
            setTabState(temp)
        }else {
            setTabState(tabData)
        }
    }
  return (
    <section id='my-project'>
    <div className="container">
        <h2>My Projects</h2>
        <div className="tabs">
            {tabLink.map((link,index) => (
                <div onClick={()=> handleTab(index,link)} key={`${index}`} className={`tab-item ${index === active ? "active": ""}`}>{link}</div>
            ))}
        </div>
        <div className="tab-container">
            {tabState.map((item,index)=> (
                <div key={index} className="tab-content">
                    {/* <div className="image-wrapper">
                        <img src={item.image} alt={item.title} />
                    </div> */}
                    <div className="tab-text-content">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        <span>USED STACK:</span>
                        <div className="tags">
                            {item.tags.map((tag,ind) => (
                                <span key={`tag-${ind}`}>{tag}</span>
                            ))}
                        </div>
                        <div className="source">
                            <a href={item.source}>{item.source}</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </section>
  )
}

export default MyProjects
