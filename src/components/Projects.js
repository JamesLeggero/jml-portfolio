import React from 'react'
import Container from 'react-bootstrap/Container'

export default function Projects() {

    const handleClick = event => {
        event.persist()
        window.open(event.target.id)

    }
    return (
        <>
        <h1 className='display-3'>pRojects</h1>
        <p>written with html/css/javascript<br />
        + listed additional technologies</p>

        <Container>
        {
        <>
        <Container>
            <h2 className='projects' id='https://jml-coffeetalk-client.herokuapp.com/' onClick={handleClick}>coffeetAlk</h2>
            <h5>socket.io, webrtc, openweather,</h5><h5>textmagic, mern, bootstrap</h5>
            <p>video chat in real time with<br/>
                international coffee farmers</p>
            </Container>

            <Container>
            <h2 className='projects' id='https://jamesleggero.github.io/pizzafreak/' onClick={handleClick}>piZZAfReAk</h2>
            <h5>jquery</h5>
            <p>construct pizzas based on<br />customers' favorite toppings</p>
            </Container>

            <Container>
            <h2 className='projects' id='https://harvard-art-museum.herokuapp.com/' onClick={handleClick}>HARVARd ARt MuseuM</h2>
            <h5>harvard art museum api,</h5><h5>mern, bootstrap</h5>
            <p>curate a collection of<br />your favorite art pieces</p>
            </Container>

            <Container>
            <h2 className='projects' id='https://monkey-mania.herokuapp.com/' onClick={handleClick}>Monkey MAniA</h2>
            <h5>mern, bulma</h5>
            <p>explore the world of<br />banana-style modular synthesizers</p>
            </Container>
            </>
}

            </Container>
        
        </>
    ) 
}