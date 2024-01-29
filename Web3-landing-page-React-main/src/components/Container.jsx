import React from 'react'

const Container = () => {
  return (
    <div>
        <div className='container'>
            <div className='text'>
                <h3>Focus on the youngest children </h3>
                <h1>URBAN 95</h1>
                <p>URBAN95 is BvLF’s global initiative, aims to create healthy, prosperous, and vibrant cities where babies, toddlers and their families can thrive.  The initiative is meant to make lasting change in the urban landscape and provide opportunities that can shape the crucial first five years of children’s lives.</p>
                <div className='button'><a href="/">Explore Now &#8599;</a></div>
            </div>
            <div className='image'>
                <img src="kids1.jpg" alt="kids" />
            </div>
        </div>
        {/* <div className='partners'>
            <span><img src="webflow.png" alt="" /></span>
            <span><img src="mparticle.png" alt="" /></span>
            <span><img src="chargebee.png" alt="" /></span>
            <span><img src="corsair.svg" alt="" /></span>
            <span><img src="emachines.png" alt="" /></span>
        </div> */}
    </div>
  )
}

export default Container