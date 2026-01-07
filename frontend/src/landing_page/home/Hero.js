import React from 'react'

function Hero() {
  return ( 
    <div className='container p-5'>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <h1 className='display-4 fw-bold'>Welcome to Our Platform</h1>
          <p className='lead'>Discover amazing features and join our community today.</p>
          <a href='/signup' className='btn btn-primary btn-lg'>Get Started</a>
        </div>
        <div className='col-md-6'>
          <img src='/assets/hero-image.png' alt='Hero' className='img-fluid' />
        </div>
      </div>
    </div>
   );
}

export default Hero;