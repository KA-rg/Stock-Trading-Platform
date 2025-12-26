import React from 'react'

function Pricing() {
  return (
    <section className="pricing">
      <h2>Pricing Plans</h2>
      <div className="pricing-plans">
        <div className="pricing-plan">
          <h3>Basic Plan</h3>
          <p>$9.99/month</p>
          <ul>
            <li>Basic features</li>
            <li>Limited support</li>
          </ul>
        </div>
        <div className="pricing-plan">
          <h3>Premium Plan</h3>
          <p>$19.99/month</p>
          <ul>
            <li>All features</li>
            <li>Priority support</li>
          </ul>
        </div>
      </div>
    </section>);
}

export default Pricing;