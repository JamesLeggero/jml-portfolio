import React from 'react'
import Container from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Projects() {

    const handleClick = event => {
        event.persist()
        window.open(event.target.id)

    }
    return (
        <>
        <h1>pRojects</h1>

        <Container>

            <Container>
            <h2 className='projects' id='https://jamesleggero.github.io/pizzafreak/' onClick={handleClick}>piZZAfReAk</h2>
            <h5>jquery</h5>
            <p>construct pizzas based on customers' favorite toppings</p>
            </Container>

            <Container>
            <h2 className='projects' id='https://jamesleggero.github.io/pizzafreak/' onClick={handleClick}>monkey mAniA</h2>
            <h5>mern, bulma</h5>
            <p>explore the world of banana-style modular synthesizers</p>
            </Container>

            <Container>
            <h2 className='projects' id='https://jamesleggero.github.io/pizzafreak/' onClick={handleClick}>HARVARd ARt MuseuM</h2>
            <h5>harvard art museum api, mern, bootstrap</h5>
            <p>curate a collection of your favorite art pieces</p>
            </Container>

            <Container>
            <h2 className='projects' id='https://jamesleggero.github.io/pizzafreak/' onClick={handleClick}>coffeetAlk</h2>
            <h5>socket.io, webrtc, openweather api, textmagic api, mern, bootstrap</h5>
            <p>video chat in real time with international coffee farmers</p>
            </Container>


            </Container>
        
        </>
    ) 
}