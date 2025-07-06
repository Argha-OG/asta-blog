import React from 'react'

{/*Components*/}
import Header from '../../components/header/Header'


function MainLayout({children}) {
  return (
    <>
      <Header />
      <div className="container mx-auto p-4 sm:px-4">{children}</div>
    </>
  );
}

export default MainLayout
