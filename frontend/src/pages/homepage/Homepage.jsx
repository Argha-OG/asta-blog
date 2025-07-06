import React from 'react'
import Homeimg from './../../assets/logo.png'
import MainLayout from '../../layout/MainLayout/MainLayout'
import Trending from '../../components/trendblog/Trending'
import Featured from '../../components/featured/Featured'

const Homepage = () => {
  return (
    <MainLayout>
      <div className="place-items-center">
        <Trending />
        <Featured />
      </div>
    </MainLayout>
  );
}

export default Homepage