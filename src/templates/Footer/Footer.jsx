import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import Button from '../Button/Button'
import './Footer.css'

function Footer() {
    return (
        <>
            <AppBar style={{ position: 'relative', bottom: 0, marginTop: '5rem', background: 'rgb(34, 34, 34)' }}>
                <Toolbar className='container-toolbar'>

                    <span className='footer-title'>Feito por Gustavo Braz</span>

                    <div className='btn-footer'> 
                        <Button color='#219bff' name='Linkedin' />
                        <Button color='#fff' name='Github' />
                    </div>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Footer