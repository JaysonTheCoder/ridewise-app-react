import React from 'react'
import disconnectedIllustration from '../assets/img/3d-buddy-white-no-wifi-icon.png'
import '../css/HomeScreen.css'
import mockData from '../mockData.json'
import pallete from '../pallete.json'
import profile from '../assets/img/171255590427612mi3t4f.jpg'
function HomeScreen() {
  return (
    <div class="main-container">
      <div class="wrap">
        <div class="logo">
          <img class="logoImg" src={ profile } alt='profile'/>
        </div>
        <h3>{ mockData[2].name }</h3>
        
      </div>
      <div class="map-container">
        
        <img src={ disconnectedIllustration } height="450px" alt='disconnected'/>
        <p>Map is not available offline!</p>
        <button>Refresh</button>
      </div>
      <div className='floatingBtn-div'>
        <button className='button-fb'>+</button>
      </div>
    </div>
  )
}

export default HomeScreen
