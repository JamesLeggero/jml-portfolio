import React from 'react'
import Container from 'react-bootstrap/Container'



import NewJML from './img/NewJML.png'
import LinkedIn from './img/LI-In-Bug.png'
import GitHub from './img/GitHub-Mark-Light-120px-plus.png'
import Resume from './img/resume-icon-white.png'

const handleClick = event => {
    event.persist()
    window.open(event.target.id)
}

export default function About() {
    return (
        <>
        <h1 className='display-3'>About</h1>
        <Container>
            
        <img  src={NewJML} id='jmlStyles' alt='JML' />
        
            <Container className='aboutText'>

            <p>i’m a deeply-focused, behind-the-scenes software engineer and web developer.</p>

            <p> i have both the technical skills to conceptualize and deploy sophisticated full-stack software as well as the communication skills to draw out the real needs of my clients and peers in a meaningful, harmonious way.</p>

            <p> together, we can make the best, most personal version of your product. </p>
            </Container>

           
        <img src={GitHub} className='aboutLink' id='https://github.com/JamesLeggero' onClick={handleClick}  alt='Github'/>
        <img src={LinkedIn} className='aboutLink' id='https://www.linkedin.com/in/james-leggero/' onClick={handleClick}  alt='LinkedIn' />
        <a href='/resume'>
        <img src={Resume} className='aboutLink' alt='Resume' />
        </a>
        
        </Container>
        </>
    ) 
}