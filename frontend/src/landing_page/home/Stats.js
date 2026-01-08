import React from 'react'

function Stats() {
  return (
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <h1>Trust with Confidence</h1>
            <h3>10K+ Active Users</h3>
            <p>Join a thriving community of traders worldwide.</p>
            <h3>500+ Trading Pairs</h3>
            <p>Diversify your portfolio with a wide range of options.</p>
            <h3>24/7 Support</h3>
            <p>We're here to help you anytime, anywhere.</p>

          </div>
          <div className='col-6'>
            <img src='/images/users.png' alt='Active Users' />
            
          </div>
        </div>
      </div>);
}

export default Stats;