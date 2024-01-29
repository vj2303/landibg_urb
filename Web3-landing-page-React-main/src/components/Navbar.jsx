import React,{useState, useEffect} from 'react'

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)

    useEffect (() => {
        const innernav = document.querySelector('.inner-nav')
        if(showNav === true){
            innernav.style.left = '0px'
        }
        else{
            innernav.style.left = '-300px'
        }
    }, [showNav])

    const handleClick = () => {
        setShowNav(!showNav)
    }
  return (
    <div className='navbar'>
        <div onClick={handleClick} className={`${showNav ? "hamburger1":"hamburger"}`}></div>
        <div className='logo'>
          <img src="pmc.png" alt="PMC Logo" style={{ height: '100px', width: '100px' }}/>
            <nav className='menu'>
                <ul className='inner-nav'>
                     <li><a href="#hub">Home</a></li>
                    <li><a href="#mint">About</a></li>
                    <li><a href="#features">Contact</a></li> 
                   
                </ul>
            </nav>
        </div>
        <div className='button'>
            {/* <a href="/">Contact Us</a> */}
        </div>
    </div>
  )
}

export default Navbar