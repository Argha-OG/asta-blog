import React from 'react'
import Homeimg from './../../assets/logo.png'
import MainLayout from '../../layout/MainLayout/MainLayout'
import Trending from '../../components/trendblog/Trending'

const Homepage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto place-items-center">
        <Trending />
        <img src={Homeimg} alt="" />
      </div>
    </MainLayout>
  );
}

export default Homepage