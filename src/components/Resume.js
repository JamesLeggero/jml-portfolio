import React from 'react'
import Container from 'react-bootstrap/Container'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

export default function Resume() {
    return (
        <>
        <h1 className='display-3'>Resumé</h1>
        <Container>
            <ResponsiveEmbed>
        <iframe title='James Leggero Resumé' src="https://docs.google.com/document/d/e/2PACX-1vQZzcBGBy-D9YqiWH2yPILNlHBsO-UIFBGbSJiigzrSqvo-fHoh7IGyAQAKol8J4O4m85kGoueMEV2J/pub?embedded=true"></iframe>
        </ResponsiveEmbed>
        </Container>
        </>
    )
}