import { Grid } from '@mui/material'
import React from 'react'
import {motion} from 'framer-motion'
import './Ability.css'

function Ability() {
    return (
        <>
            <div className='ability-container'>
                <span className='ability-title'>Habilidades</span>

                <Grid container className='ability-image-container' spacing={1} justifyContent='center' style={{margin: '5rem 0'}}>
                    <Grid item lg={2} md={3} sm={4} xs={4}>
                        <motion.img 
                        whileHover={{scale: 1.1}}
                        style={{ width: 130, position: 'relative', top: -25}}
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' alt='HTML' />
                    </Grid>
                    <Grid item lg={2} md={3} sm={4} xs={4}>
                        <motion.img 
                        whileHover={{scale: 1.1}}
                        style={{ width: 95, position: 'relative', top: -25 }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png' alt='CSS' />
                    </Grid>
                    <Grid item lg={2} md={3} sm={4} xs={4}>
                        <motion.img 
                        whileHover={{scale: 1.1}}
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3-rxVqlnVUWa1-XJrUKxDXSzrG4mKyufcXA&usqp=CAU' alt='JavaScript' />
                    </Grid>
                    <Grid item lg={2} md={3} sm={4} xs={4}>
                        <motion.img 
                        whileHover={{scale: 1.1}}
                        src='https://bognarjunior.files.wordpress.com/2018/09/typescript.png' alt='Typescript' />
                    </Grid>
                    <Grid item lg={2} md={3} sm={4} xs={4}>
                        <motion.img 
                        whileHover={{scale: 1.1}}
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' alt='React' />
                    </Grid>
                </Grid>
                
                <span className='ability-title'>Aprendendo</span>
                <Grid container className='ability-image-container' spacing={2} justifyContent='center' alignItems='center' style={{marginTop: '3rem'}}>
                    <Grid item lg={2} md={3} sm={4}>
                        <motion.img
                         whileHover={{scale: 1.1}}
                         style={{width: 130}}
                        src="https://i1.wp.com/www.ux-republic.com/wp-content/uploads/2016/11/logo-redux.png?fit=500%2C500&ssl=1" alt="Redux" />
                    </Grid>
                    <Grid item lg={2} md={3} sm={4}>
                        <motion.img
                         whileHover={{scale: 1.1}}
                         style={{width: 130}}
                        src="https://www.opus-software.com.br/wp-content/uploads/2018/09/nodejs.jpg" alt="Node"/>
                    </Grid>
                    <Grid item lg={2} md={3} sm={4}>
                        <motion.img
                         whileHover={{scale: 1.1}}
                         style={{width: 130}}
                        src="https://www.mundodocker.com.br/wp-content/uploads/2015/06/docker_facebook_share.png" alt="Docker" />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Ability