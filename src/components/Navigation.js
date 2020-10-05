import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

import NewJML from './img/NewJML.png'

export default function Navigation() {

    return (
<>
        <Navbar fixed='top' className='navbar-dark' style={{
            borderBottom: '2px solid white',
            color: 'white'
        }}>
            <Navbar.Brand style={{
                fontSize: '1.7em'
                }} href='/'>
                <img
                alt=''
                src={NewJML}
                width='60'
                height='60'
                className='d-inline-block align-center'
                style={{
                    border: '2px solid rgb(60,60,60)',
                    borderRadius: '100%'}} />{' '}
                jAMes leGGeRo
            </Navbar.Brand>


        </Navbar>




</>
    )
    
    
    // <h1>jAmes leggeRo</h1>
}