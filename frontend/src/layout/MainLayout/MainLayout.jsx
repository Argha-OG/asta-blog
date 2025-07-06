import React from 'react'

{/*Components*/}
import Header from '../../components/header/Header'


function MainLayout({children}) {
  return (
    <>
      <Header />
      <div className="max-w-6xl container mx-auto p-4 sm:px-6">
        {children}
      </div>
    </>
  );
}

export default MainLayout
