import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import Button from '../Button/Button'

function Footer() {
    return (
        <>
            <AppBar style={{ position: 'relative', bottom: 0, marginTop: '5rem', background: 'rgb(34, 34, 34)' }}>
                <Toolbar style={{display: 'flex', justifyContent: 'space-between',}}>
                    <span>Feito por Gustavo Braz</span>
                    <div style={{marginBottom: '1rem'}}> 
                    <Button color='#219bff' name='Linkedin' />
                    <Button color='#fff' name='Github' />
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Footer