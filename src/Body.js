import React from 'react'
import './Body.css'
import Header from './Header';
function Body({spotify}) {
  return (
    <div className='body'>
      <Header spotify={spotify} />

      <div className='body_info'>

        <img 
        src='https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/39MO4rpxkctRc574LExDwQ==/ZGlkaWRpZGlkaWRpZGlkaQ==' alt=''
        />
        <div className='body_infoText'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>Description</p>
        </div>
      </div>
    </div>
  )
}

export default Body;