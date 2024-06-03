import React from 'react'
import './Footer.css'
import { PlayCircle, PlayCircleOutline, PlaylistPlay, Repeat, Shuffle, SkipNext, SkipPrevious, VolumeDown } from '@mui/icons-material'
import { Grid, Slider } from '@mui/material'


function Footer() {
  return (
    <div className='footer'>
      <div className='footer_left'>
        
        <img className='albumLogo'
        src='https://upload.wikimedia.org/wikipedia/en/d/da/Alan_Walker_-_Faded.png'
        alt=''
        />
        
        <div className='songInfo'>
        <h4> Faded</h4>
        <p>Alan Walker</p>
        </div>
      </div>

      <div className='footer_center'>
        
        <Shuffle className='footer_green' />
        <SkipPrevious className='skipPrevious' />
        <PlayCircleOutline fontSize='large' className='footer_play' />
        <SkipNext className='skipNext' />
        <Repeat className='footer_green' />
        
        


      </div>

      <div className='footer_right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item >
            <Slider />
          </Grid>
        </Grid>


      </div>
    </div>
  )
}

export default Footer