import React from 'react'

export default function (p) {
    const { handelToggle, data } = p
    return (
        <div className='sideBar'>
            <div className='bgOverlay' onClick={handelToggle}></div>
            <div className='sidebarContents'>
                <h2>{data?.title}</h2>
                <div>
                    <p>{data?.explanation} </p>
                </div>
                <button onClick={handelToggle}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>

        </div>


    )
}
