import React from 'react'
import "./Stars.css"
import star from "../assets/star.png"

const Star = () => {
    return (
        <div>

            <div className='parent'>
                <div className='child'>
                    <img src={star}></img>
                </div>
            </div>

        </div>
    )
}

export default Star
