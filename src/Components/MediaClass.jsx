import React from 'react'
import "./Media.css"
import navbarImg from "../assets/dodge.png"
const MediaClass = () => {
    return (
        <div>

            <div className="navbarContainer">
                <div>
                    <img src={navbarImg} alt="" className='navbarImg' />
                </div>
                <div>
                    <div className='test'>name</div>
                    <ul className='navbarUl'>
                        <li className='navbarLi'>Home</li>
                        <li className='navbarLi'  >About</li>
                        <li className='navbarLi' >Contact</li>
                    </ul>
                </div>
                <div>
                    <button className='navbarButton' >Signup</button>
                </div>
            </div>

        </div>
    )
}

export default MediaClass
