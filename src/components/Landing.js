import React from 'react'
import Container from 'react-bootstrap/Container'

export default function Landing() {
    return (
        <>
        <h1 className='cha display-4'>jAMes leGGeRo</h1>
        <Container className='landingLinkContainer'>
            <a className='landingLinks' href='/projects'>
                <h2>pRojects</h2>
            </a>
            <a className='landingLinks' href='/about'>
                <h2>About</h2>
            </a>


        </Container>
        </>







    )
}