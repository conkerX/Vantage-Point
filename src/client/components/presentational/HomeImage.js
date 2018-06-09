import React from 'react'

const HomeImage = () => {
  return (
    <div id="home-image-container">
      <img id="home-image" src="https://preview.ibb.co/nqZKMx/brandon_snowboard.jpg" alt="brandon-snowboard" />
      <div id="home-image-text">
        <div className="home-image-text-name-container">  
          <h1 className="text">Brandon Hadler</h1>
        </div>
        <hr className="home-image-text-hr"/>
        <div className="home-image-text-position-container">
          <h4 className="text">Front-end Software Engineer</h4>
        </div>
      </div>
    </div>
  )
}

export default HomeImage;