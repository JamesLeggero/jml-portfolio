import React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'



import NewJML from './img/NewJML.png'
import LinkedIn from './img/LI-In-Bug.png'
import GitHub from './img/GitHub-Mark-Light-120px-plus.png'
import Resume from './img/resume-icon-white.png'

const handleClick = event => {
    event.persist()
    if (event.target.id === 'github') {
        window.open('https://github.com/JamesLeggero')
    } else if (event.target.id === 'linkedin') {
        window.open('https://www.linkedin.com/in/james-leggero/')
    }
}

export default function About() {
    return (
        <>
        <h1>About</h1>
        <Container>
            
        <img  src={NewJML} id='jmlStyles' alt='JML' />
        
            <Container className='aboutText'>

            <p>i’m a deeply-focused, behind-the-scenes software engineer and web developer.</p>

            <p> i have both the technical skills to conceptualize and deploy sophisticated full-stack software as well as the communication skills to draw out the real needs of my clients and peers in a meaningful, harmonious way.</p>

            <p> together, we can make the best, most personal version of your product. </p>
            </Container>

           
        <img src={Resume} className='aboutLink' alt='Resume' />
        <img src={GitHub} className='aboutLink' id='github' onClick={handleClick}  alt='Github'/>
        <img src={LinkedIn} className='aboutLink' id='linkedin' onClick={handleClick}  alt='LinkedIn' />
        
        </Container>
        </>
    ) 
}