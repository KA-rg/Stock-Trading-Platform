import React from 'react'

function Awards() {
  return ( 
    <div className='container'>
      <div className='row text-center'>
        <div className='col-md-4'>
          <h2>Awards Section</h2>
          <p>Our platform has received numerous accolades for excellence.</p>
          <p>Upcoming greatest trading platform.</p>
          <img src='/assets/award1.png' alt='Award 1' className='img-fluid' />
        </div>
        <div className='col-md-4'>
          <h1>Largest trading platform in the world.</h1>
          <p>2+ millions clients contribute over all in this platform</p>
          <div className='row'>
            <div className='col-md-6'>
              <ul>
                <li><p>Futures and Options</p></li>
                <li><p>Commodities</p></li>
                <li><p>Stocks</p></li>
              </ul>
            </div>
            <div className='col-md-6'>
              <ul>
                <li><p>Indices</p></li>
                <li><p>Cryptocurrency</p></li>
                <li><p>Forex</p></li>
              </ul>
            </div>
          </div>
      </div>
    </div>
    </div>
   );
  }

export default Awards;