import React from 'react'

import NewJML from './img/NewJML.png'

const imgStyles = {
    width: '400px',
    border: '4px solid grey',
    borderRadius: '100%'
}

export default function About() {
    return (
        <>
        <h1>ABOUT</h1>
        <img src={NewJML} style={imgStyles} alt='JML' />
        </>
    ) 
}