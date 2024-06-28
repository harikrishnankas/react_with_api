import React from 'react'

export default function Footer(p) {
    const { handelToggle, data } = p
    return (
        <footer>
            <div className='bgGradient'></div>
            <div>
                <h1>React</h1>
                <h2>{data?.title}</h2>
            </div>
            <button onClick={handelToggle}>
                <i className="fa-solid fa-circle-info"></i>
            </button>

        </footer>
    )
}
