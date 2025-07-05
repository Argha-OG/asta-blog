import React from 'react'

{/*Components*/}
import Header from '../../components/header/Header'


function MainLayout({children}) {
  return (
    <>
      <Header />
      <div className="container mx-auto p-4 px-40 sm:px-6">
        {children}
      </div>
    </>
  );
}

export default MainLayout
