import React from 'react';

const Navbar = () => {
  return (
    <div style={{
      height: '30px',
      width: '100vw',
      position: 'fixed',
      top: '0',
      left: '0',
      zIndex: '10',
      borderBottom: '1px black solid',
      backgroundColor: 'white',
      opacity: '0.9',
    }}>
      <h2>MyTuber</h2>
    </div>
  )
}

export default Navbar;