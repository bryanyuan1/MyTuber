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
      display: 'flex',
      justifyContent: 'space-between',
    }}>
      <h2 style={{ display: 'inline-block' }}>MyTuber</h2>
      <div style={{ 
        display: 'flex',
        margin: '0',
        width: '100px',
        justifyContent: 'space-between'
      }}>
        <h3 style={{ display: 'inline-block', margin: '0' }}>Streams</h3>
        <h3 style={{ display: 'inline-block', margin: '0' }}>Login</h3>
      </div>
    </div>
  )
}

export default Navbar;