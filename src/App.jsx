import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import AdminProduction from './AdminProduction';
import AdminInventory from './AdminInventory';
import AdminOrders from './AdminOrders';

function HomePage() {
  const [quantity, setQuantity] = useState(30);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerContact, setCustomerContact] = useState('');
  const [formError, setFormError] = useState('');

  return (
    <>
      <div className="hero-wrapper">
        <nav className="navbar">
          <span className="navbar-logo">ELICYCLEX</span>
          <div className="navbar-links">
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero">
          <span className="hero-tag">BLACK SOLDIER FLY · BOTSWANA</span>

          <h1 className="hero-title">
            Turning Waste Into<br />Sustainable Protein.
          </h1>

          <p className="hero-description">
            ELICYCLEX is a Botswana-based company producing sustainable
            BSF protein feed and developing circular agricultural solutions.
          </p>

          <a href="#products" className="hero-link">
            View feed products →
          </a>
        </div>
      </div>

      <section className="process">
        <h2 className="process-title">From Waste to Protein</h2>
        <div className="process-steps">
          <div className="process-step">Organic Waste</div>
          <div className="process-arrow">↓</div>
          <div className="process-step">BSF Breeding</div>
          <div className="process-arrow">↓</div>
          <div className="process-step">Larvae</div>
          <div className="process-arrow">↓</div>
          <div className="process-step">Harvest</div>
          <div className="process-arrow">↓</div>
          <div className="process-step">Drying / Processing</div>
          <div className="process-arrow">↓</div>
          <div className="process-step">Protein Feed</div>
          <div className="process-arrow">↓</div>
          <div className="process-step">Circular Agriculture</div>
        </div>
      </section>

      <div className="section-wrapper">
        <section className="about">
          <div className="about-content">
            <h2 className="about-title">About ELICYCLEX</h2>
            <p className="about-text">
              ELICYCLEX is a Botswana-based company developing sustainable
              agricultural and circular-economy solutions, with Black Soldier
              Fly (BSF) protein production as its primary focus. Built in
              Botswana, designed for Africa — ELICYCLEX aims to turn organic
              waste into valuable protein and support the growth of
              sustainable agriculture across the region.
            </p>
          </div>
        </section>
      </div>

      <div className="section-wrapper">
        <section className="products" id="products">
          <h2 className="products-title">Our Product</h2>
          <div className="product-card">
            <span className="product-tag">DRIED LARVAE</span>
            <h3 className="product-name">ELICYCLEX BSF Protein Feed</h3>
            <p className="product-description">
              [INSERT PRODUCT DESCRIPTION]
            </p>
            <ul className="product-specs">
              <li>Minimum order: 30kg</li>
              <li>Packaging: [INSERT PACKAGING INFO]</li>
              <li>Applications: [INSERT APPLICATIONS]</li>
            </ul>

            <div className="quantity-selector">
              <label htmlFor="quantity">Quantity (kg):</label>
              <input
                type="number"
                id="quantity"
                min="30"
                step="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(30, Number(e.target.value)))}
              />
            </div>

            <div className="product-actions">
              <button className="btn-primary" onClick={() => setShowOrderForm(true)}>Request Quote</button>
              <button className="btn-secondary" onClick={() => setShowOrderForm(true)}>Order Now</button>
            </div>

            {showOrderForm && !orderSubmitted && (
              <div className="order-form">
                <h4>Complete Your Order</h4>
                <p>Ordering {quantity}kg of ELICYCLEX BSF Protein Feed</p>
                <input type="text" placeholder="Full Name" className="order-input" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
                <input type="text" placeholder="Phone or Email" className="order-input" value={customerContact} onChange={(e) => setCustomerContact(e.target.value)} />
                {formError && <p className="form-error">{formError}</p>}
                <div className="order-form-actions">
                  <button
                    className="btn-primary"
                    onClick={() => {
                      if (!customerName.trim() || !customerContact.trim()) {
                        setFormError('Please fill in your name and contact info.');
                      } else {
                        setFormError('');
                        setOrderSubmitted(true);
                      }
                    }}
                  >
                    Submit Order
                  </button>
                  <button
                    className="btn-secondary"
                    onClick={() => setShowOrderForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
            {orderSubmitted && (
              <div className="order-confirmation">
                <p>✓ Order request received for {quantity}kg. We'll contact you shortly.</p>
              </div>
            )}
          </div>
        </section>
      </div>

      <div className="section-wrapper">
        <section className="industries">
          <h2 className="industries-title">Industries We Serve</h2>
          <div className="industries-grid">
            <div className="industry-card">
              <h3>Poultry</h3>
              <p>BSF protein as a potential feed ingredient.</p>
            </div>
            <div className="industry-card">
              <h3>Pig Farming</h3>
              <p>Potential alternative/additional protein source.</p>
            </div>
            <div className="industry-card">
              <h3>Aquaculture</h3>
              <p>Potential application in fish feed.</p>
            </div>
            <div className="industry-card">
              <h3>Livestock</h3>
              <p>Potential applications depending on formulation.</p>
            </div>
            <div className="industry-card">
              <h3>Feed Manufacturers</h3>
              <p>BSF protein ingredient supply.</p>
            </div>
          </div>
        </section>
      </div>

      <div className="section-wrapper">
        <section className="sustainability">
          <h2 className="sustainability-title">Built in Botswana. Designed for Africa.</h2>
          <div className="sustainability-cycle">
            <div className="cycle-step">Organic Waste</div>
            <div className="cycle-arrow">↓</div>
            <div className="cycle-step">BSF Larvae</div>
            <div className="cycle-arrow">↓</div>
            <div className="cycle-step">Protein Feed</div>
            <div className="cycle-arrow">↓</div>
            <div className="cycle-step">Agriculture</div>
            <div className="cycle-arrow">↓</div>
            <div className="cycle-step">More Production</div>
          </div>
        </section>
      </div>

      <footer className="footer" id="contact">
        <div className="footer-content">
          <h2 className="footer-title">Get in Touch</h2>
          <p className="footer-text">
            Interested in ELICYCLEX BSF Protein Feed or partnering with us?
          </p>
          <div className="footer-details">
            <p>Phone: [INSERT PHONE NUMBER]</p>
            <p>WhatsApp: [INSERT WHATSAPP NUMBER]</p>
            <p>Email: [INSERT EMAIL ADDRESS]</p>
            <p>Location: [INSERT LOCATION]</p>
          </div>
          <p className="footer-copyright">
            © {new Date().getFullYear()} ELICYCLEX. Built in Botswana.
          </p>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/production" element={<AdminProduction />} />
<Route path="/admin/inventory" element={<AdminInventory />} />
<Route path="/admin/orders" element={<AdminOrders />} />
    </Routes>
  );
}

export default App;
