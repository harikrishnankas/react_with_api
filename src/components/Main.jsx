import React from 'react'

export default function Main(p) {
    const { data } = p
    return (
        <div className='imgContainer'>
            <img src={data?.hdurl} className='bgImg' />
        </div>
    )
}
