import { Grid, Tooltip } from '@mui/material'
import React from 'react'
import {motion} from 'framer-motion'
import './Ability.css'

function Ability() {
    return (
        <>
            <div className='ability-container'>
                <span className='ability-title'>Habilidades</span>

                <div style={{marginTop: '5rem', marginBottom: '5rem'}}>

                <Grid container className='ability-image-container' spacing={1} justifyContent='center' >

                    <Grid item lg={2} md={3} sm={4} xs={6}>
                        <Tooltip title='Html 5'>
                        <motion.img 
                        whileHover={{scale: 1.1}}
                        style={{ width: 130, position: 'relative', top: -25 }}
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' alt='HTML' />
                        </Tooltip>
                    </Grid>


                    <Grid item lg={2} md={3} sm={4} xs={6}>
                        <Tooltip title='Css'>
                        <motion.img 
                        whileHover={{scale: 1.1}}
                        style={{ width: 95, position: 'relative', top: -25 }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png' alt='CSS' />
                        </Tooltip>
                    </Grid>


                    <Grid item lg={2} md={3} sm={4} xs={6}>
                        <Tooltip title='JavaScript'>
                        <motion.img 
                        whileHover={{scale: 1.1}}
                        style={{marginBottom: '1rem'}}
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3-rxVqlnVUWa1-XJrUKxDXSzrG4mKyufcXA&usqp=CAU' alt='JavaScript' />
                        </Tooltip>
                    </Grid>
                    <Grid item lg={2} md={3} sm={4} xs={6}>
                        <Tooltip title='TypeScript'>
                        <motion.img 
                        whileHover={{scale: 1.1}}
                        style={{marginBottom: '1rem'}}
                        src='https://bognarjunior.files.wordpress.com/2018/09/typescript.png' alt='Typescript' />
                        </Tooltip>
                    </Grid>
                    <Grid item lg={2} md={3} sm={4} xs={6}>
                        <Tooltip title='React Js'>
                        <motion.img 
                        whileHover={{scale: 1.1}}
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' alt='React' />
                        </Tooltip>
                    </Grid>

                    <Grid item lg={2} md={3} sm={4} xs={6}>
                        <Tooltip title='Redux'>
                        <motion.img 
                        whileHover={{scale: 1.1}}
                        style={{width: 130, position: 'relative', top: '-10px'}}
                        src='https://i1.wp.com/www.ux-republic.com/wp-content/uploads/2016/11/logo-redux.png?fit=500%2C500&ssl=1' alt='Redux' />
                        </Tooltip>
                    </Grid>

                </Grid>
                </div>
                
                <span className='ability-title'>Aprendendo</span>
                <Grid container className='ability-image-container' spacing={2} justifyContent='center' alignItems='center' style={{marginTop: '3rem'}}>
                    <Grid item lg={2} md={3} sm={4}>
                        <Tooltip title='Node js'>
                        <motion.img
                         whileHover={{scale: 1.1}}
                         style={{width: 130}}
                         src="https://www.opus-software.com.br/wp-content/uploads/2018/09/nodejs.jpg" alt="Node"/>
                         </Tooltip>
                    </Grid>
                    <Grid item lg={2} md={3} sm={4}>
                        <Tooltip title='Mongo Db'>
                        <motion.img
                         whileHover={{scale: 1.1}}
                         style={{width: 130}}
                         src="https://cdn.cdnlogo.com/logos/m/30/mongodb-icon.svg" alt="Node"/>
                         </Tooltip>
                    </Grid>
                    <Grid item lg={2} md={3} sm={4}>
                        <Tooltip title='Docker'>
                        <motion.img
                         whileHover={{scale: 1.1}}
                         style={{width: 130}}
                         src="https://www.mundodocker.com.br/wp-content/uploads/2015/06/docker_facebook_share.png" alt="Docker" />
                         </Tooltip>
                    </Grid>
                    <Grid item lg={2} md={3} sm={4}>
                        <Tooltip title='Angular'>
                        <motion.img
                         whileHover={{scale: 1.1}}
                         style={{width: 130}}
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png" alt="Angular" />
                         </Tooltip>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Ability