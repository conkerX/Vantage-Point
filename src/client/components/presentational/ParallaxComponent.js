import React from 'react'
import { Parallax, Background } from 'react-parallax';

const ParallaxComponent = () => {
  return (
    <div>
      <div className="parallax-image-container">
        <Parallax strength={500} className="parallax">
          <div className="parallax-image-text">Conker 1</div>
          <Background className="background-container">
            <img className="parallax-image" src="https://preview.ibb.co/nqZKMx/brandon_snowboard.jpg" alt="fill murray" />         
          </Background>
        </Parallax>
      </div>

      <Parallax
        bgImage="https://preview.ibb.co/nqZKMx/brandon_snowboard.jpg"
        bgWidth="500px"
        bgHeight="500px"
        bgImageAlt="the cat"
        strength={500}
      >
      Conker 2
      </Parallax>

      <Parallax
        bgImage="https://preview.ibb.co/nqZKMx/brandon_snowboard.jpg"
        bgWidth="500px"
        bgHeight="500px"
        bgImageAlt="the cat"
        strength={100}
      >
        Conker 2
      <div style={{ height: '500px' }} />
      </Parallax>
    </div>
  )
}

export default ParallaxComponent;
