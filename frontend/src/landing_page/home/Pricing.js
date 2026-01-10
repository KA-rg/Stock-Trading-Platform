import React from 'react'

function Pricing() {
  return (
    <div className='container'>
      <h2>Pricing Plans</h2>
      <div className="row"> 
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 fw-normal">Free</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
            </div>  
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 fw-normal">Pro</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;