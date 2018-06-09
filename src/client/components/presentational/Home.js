import React from 'react'
import MyNavbar from '../presentational/MyNavbar';
import HomeImage from '../presentational/HomeImage';
import Blurb from '../presentational/Blurb';
import ParallaxComponent from '../presentational/ParallaxComponent';

const Home = () => {
  return (
    <div>
      <HomeImage />
      <Blurb />
      <ParallaxComponent />
    </div>
  )
}

export default Home;
