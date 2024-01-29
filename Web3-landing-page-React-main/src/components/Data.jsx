import React, { useState } from 'react'

const Data = () => {
    const [currentData, setCurrentData] = useState("trips")
  return (
    <div className='data'>
        <h1>Current Data</h1>
        <ul>
            <li className={currentData === "noOfChildren" ? "activeData" : ""} onClick={()=>setCurrentData("noOfChildren")}>No of Children</li>
            <li className={currentData === "noOfCareGiver" ? "activeData" : ""} onClick={()=>setCurrentData("noOfCareGiver")}>No of CareGiver</li>
            <li className={currentData === "behaviour" ? "activeData" : ""} onClick={()=>setCurrentData("behaviour")}>Behaviour</li>
            <li className={currentData === "Noise Pollution" ? "activeData" : ""} onClick={()=>setCurrentData("Noise Pollution")}>Noise Pollution</li>
            <li className={currentData === "Air Pollution" ? "activeData" : ""} onClick={()=>setCurrentData("Air Polluution")}>Air Pollution</li>
        </ul>
        <div className='charts_container'>
            {currentData}
        </div>
    </div>
  )
}

export default Data