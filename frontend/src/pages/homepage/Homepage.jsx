import React from 'react'
import Homeimg from './../../assets/logo.png'
import MainLayout from '../../layout/MainLayout/MainLayout'
import Trending from '../../components/trendblog/Trending'

const Homepage = () => {
  return (
    <MainLayout>
      <div className="place-items-center">
        <Trending />
      </div>
    </MainLayout>
  );
}

export default Homepage