import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import AdminProduction from './AdminProduction';
import AdminInventory from './AdminInventory';
import AdminOrders from './AdminOrders';
import AdminCustomers from './AdminCustomers';
import AdminDeliveries from './AdminDeliveries';
import AdminSales from './AdminSales';
import AdminExpenses from './AdminExpenses';
import AdminProfit from './AdminProfit';
import AdminSettings from './AdminSettings';
import { supabase } from './supabaseClient';

function HomePage() {
  // Separate quantity for each product
  const [driedBags, setDriedBags] = useState(1);
  const [liveBags, setLiveBags] = useState(1);
  const [powderBags, setPowderBags] = useState(1);

  // Selected product for the order form
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(30);

  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerContact, setCustomerContact] = useState('');
  const [formError, setFormError] = useState('');

  const openOrderForm = (productName, bags) => {
    setSelectedProduct(productName);
    setSelectedQuantity(bags * 30);
    setOrderSubmitted(false);
    setFormError('');
    setShowOrderForm(true);
  };

  const submitOrder = async () => {
    if (!customerName.trim() || !customerContact.trim()) {
      setFormError('Please fill in your name and contact info.');
      return;
    }

    setFormError('');

    const { error } = await supabase.from('orders').insert({
      customer_name: customerName,
      customer_contact: customerContact,
      quantity: selectedQuantity,
    });

    if (error) {
      setFormError('Something went wrong. Please try again.');
    } else {
      setOrderSubmitted(true);
    }
  };

  return (
    <>
      {/* HERO */}
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
          <span className="hero-tag">
            BLACK SOLDIER FLY · BOTSWANA
          </span>

          <h1 className="hero-title">
            Turning Waste Into
            <br />
            Sustainable Protein.
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

      {/* PROCESS */}
      <section className="process">
        <h2 className="process-title">
          From Waste to Protein
        </h2>

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

      {/* ABOUT */}
      <div className="section-wrapper">
        <section className="about" id="about">
          <div className="about-content">
            <h2 className="about-title">
              About ELICYCLEX
            </h2>

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

      {/* PRODUCTS */}
      <div className="section-wrapper">
        <section className="products" id="products">

          <h2 className="products-title">
            Our Products
          </h2>

          {/* ========================= */}
          {/* DRIED BSF PROTEIN MEAL */}
          {/* ========================= */}

          <div className="product-card">
            <span className="product-tag">
              DRIED LARVAE
            </span>

            <h3 className="product-name">
              Dried BSF Protein Meal
            </h3>

            <p className="product-description">
              A shelf-stable, high-protein feed ingredient processed through
              controlled drying, built for bulk storage and reliable
              long-distance distribution.
            </p>

            <ul className="product-specs">
              <li>
                Minimum order: 30kg
              </li>

              <li>
                Packaging: Sealed 30kg bags suitable for storage and distribution
              </li>

              <li>
                Applications: Poultry, pigs, aquaculture, livestock and feed manufacturing
              </li>
            </ul>

            <div className="quantity-selector">
              <label htmlFor="dried-bags">
                Number of 30kg Bags:
              </label>

              <input
                type="number"
                id="dried-bags"
                min="1"
                step="1"
                value={driedBags}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setDriedBags(
                    e.target.value === ''
                      ? ''
                      : Math.max(1, value)
                  );
                }}
                onBlur={() => {
                  if (!driedBags || driedBags < 1) {
                    setDriedBags(1);
                  }
                }}
              />

              <span className="quantity-total">
                = {(driedBags || 0) * 30}kg
              </span>
            </div>

            <div className="product-actions">

              <button
                className="btn-primary"
                onClick={() =>
                  openOrderForm(
                    'Dried BSF Protein Meal',
                    driedBags || 1
                  )
                }
              >
                Request Quote
              </button>

              <button
                className="btn-secondary"
                onClick={() =>
                  openOrderForm(
                    'Dried BSF Protein Meal',
                    driedBags || 1
                  )
                }
              >
                Order Now
              </button>

            </div>
          </div>

          {/* ========================= */}
          {/* LIVE BSF LARVAE */}
          {/* ========================= */}

          <div className="product-card">

            <span className="product-tag">
              LIVE LARVAE
            </span>

            <h3 className="product-name">
              Live BSF Larvae
            </h3>

            <p className="product-description">
              Fresh, nutrient-rich black soldier fly larvae, ideal for
              poultry, fish, pigs and other livestock requiring a natural
              high-protein feed source.
            </p>

            <ul className="product-specs">

              <li>
                Minimum order: 30kg
              </li>

              <li>
                Packaging: Ventilated containers suitable for live larvae
              </li>

              <li>
                Applications: Poultry, fish, pigs, livestock and aquaculture
              </li>

            </ul>

            <div className="quantity-selector">

              <label htmlFor="live-bags">
                Number of 30kg Bags:
              </label>

              <input
                type="number"
                id="live-bags"
                min="1"
                step="1"
                value={liveBags}
                onChange={(e) => {
                  const value = Number(e.target.value);

                  setLiveBags(
                    e.target.value === ''
                      ? ''
                      : Math.max(1, value)
                  );
                }}
                onBlur={() => {
                  if (!liveBags || liveBags < 1) {
                    setLiveBags(1);
                  }
                }}
              />

              <span className="quantity-total">
                = {(liveBags || 0) * 30}kg
              </span>

            </div>

            <div className="product-actions">

              <button
                className="btn-primary"
                onClick={() =>
                  openOrderForm(
                    'Live BSF Larvae',
                    liveBags || 1
                  )
                }
              >
                Request Quote
              </button>

              <button
                className="btn-secondary"
                onClick={() =>
                  openOrderForm(
                    'Live BSF Larvae',
                    liveBags || 1
                  )
                }
              >
                Order Now
              </button>

            </div>
          </div>

          {/* ========================= */}
          {/* BSF PROTEIN POWDER */}
          {/* ========================= */}

          <div className="product-card">

            <span className="product-tag">
              PROTEIN POWDER
            </span>

            <h3 className="product-name">
              BSF Protein Powder
            </h3>

            <p className="product-description">
              A finely processed, high-protein BSF meal powder designed as
              a nutritious and sustainable feed ingredient for livestock
              and aquaculture.
            </p>

            <ul className="product-specs">

              <li>
                Minimum order: 30kg
              </li>

              <li>
                Packaging: Sealed 30kg bags for safe storage and distribution
              </li>

              <li>
                Applications: Poultry, pigs, fish, livestock and aquaculture
              </li>

            </ul>

            <div className="quantity-selector">

              <label htmlFor="powder-bags">
                Number of 30kg Bags:
              </label>

              <input
                type="number"
                id="powder-bags"
                min="1"
                step="1"
                value={powderBags}
                onChange={(e) => {
                  const value = Number(e.target.value);

                  setPowderBags(
                    e.target.value === ''
                      ? ''
                      : Math.max(1, value)
                  );
                }}
                onBlur={() => {
                  if (!powderBags || powderBags < 1) {
                    setPowderBags(1);
                  }
                }}
              />

              <span className="quantity-total">
                = {(powderBags || 0) * 30}kg
              </span>

            </div>

            <div className="product-actions">

              <button
                className="btn-primary"
                onClick={() =>
                  openOrderForm(
                    'BSF Protein Powder',
                    powderBags || 1
                  )
                }
              >
                Request Quote
              </button>

              <button
                className="btn-secondary"
                onClick={() =>
                  openOrderForm(
                    'BSF Protein Powder',
                    powderBags || 1
                  )
                }
              >
                Order Now
              </button>

            </div>
          </div>

          {/* ========================= */}
          {/* ORDER FORM */}
          {/* ========================= */}

          {showOrderForm && !orderSubmitted && (

            <div className="order-form">

              <h4>
                Complete Your Order
              </h4>

              <p>
                Ordering {selectedQuantity}kg of {selectedProduct}
              </p>

              <input
                type="text"
                placeholder="Full Name"
                className="order-input"
                value={customerName}
                onChange={(e) =>
                  setCustomerName(e.target.value)
                }
              />

              <input
                type="text"
                placeholder="Phone or Email"
                className="order-input"
                value={customerContact}
                onChange={(e) =>
                  setCustomerContact(e.target.value)
                }
              />

              {formError && (
                <p className="form-error">
                  {formError}
                </p>
              )}

              <div className="order-form-actions">

                <button
                  className="btn-primary"
                  onClick={submitOrder}
                >
                  Submit Order
                </button>

                <button
                  className="btn-secondary"
                  onClick={() => {
                    setShowOrderForm(false);
                    setFormError('');
                  }}
                >
                  Cancel
                </button>

              </div>

            </div>
          )}

          {/* ORDER CONFIRMATION */}

          {orderSubmitted && (

            <div className="order-confirmation">

              <p>
                ✓ Order request received for {selectedQuantity}kg
                of {selectedProduct}. We'll contact you shortly.
              </p>

            </div>
          )}

        </section>
      </div>

      {/* INDUSTRIES */}
      <div className="section-wrapper">

        <section className="industries">

          <h2 className="industries-title">
            Industries We Serve
          </h2>

          <div className="industries-grid">

            <div className="industry-card">
              <h3>Poultry</h3>
              <p>
                BSF protein as a potential feed ingredient.
              </p>
            </div>

            <div className="industry-card">
              <h3>Pig Farming</h3>
              <p>
                Potential alternative/additional protein source.
              </p>
            </div>

            <div className="industry-card">
              <h3>Aquaculture</h3>
              <p>
                Potential application in fish feed.
              </p>
            </div>

            <div className="industry-card">
              <h3>Livestock</h3>
              <p>
                Potential applications depending on formulation.
              </p>
            </div>

            <div className="industry-card">
              <h3>Feed Manufacturers</h3>
              <p>
                BSF protein ingredient supply.
              </p>
            </div>

          </div>

        </section>
      </div>

      {/* SUSTAINABILITY */}
      <div className="section-wrapper">

        <section className="sustainability">

          <h2 className="sustainability-title">
            Built in Botswana. Designed for Africa.
          </h2>

          <div className="sustainability-cycle">

            <div className="cycle-step">
              Organic Waste
            </div>

            <div className="cycle-arrow">↓</div>

            <div className="cycle-step">
              BSF Larvae
            </div>

            <div className="cycle-arrow">↓</div>

            <div className="cycle-step">
              Protein Feed
            </div>

            <div className="cycle-arrow">↓</div>

            <div className="cycle-step">
              Agriculture
            </div>

            <div className="cycle-arrow">↓</div>

            <div className="cycle-step">
              More Production
            </div>

          </div>

        </section>
      </div>

      {/* FOOTER */}
      <footer className="footer" id="contact">

        <div className="footer-content">

          <h2 className="footer-title">
            Get in Touch
          </h2>

          <p className="footer-text">
            Interested in ELICYCLEX BSF Protein Feed or partnering with us?
          </p>

          <div className="footer-details">

            <p>
              Phone: [+267 77 473 270]
            </p>

            <p>
              WhatsApp: [+267 77 473 270]
            </p>

            <p>
              Email: [elicyclexproteinfeeds.bw@gmail.com]
            </p>

            <p>
              Location: [Gabane, Botswana]
            </p>

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

      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/admin"
        element={<AdminDashboard />}
      />

      <Route
        path="/admin/production"
        element={<AdminProduction />}
      />

      <Route
        path="/admin/inventory"
        element={<AdminInventory />}
      />

      <Route
        path="/admin/orders"
        element={<AdminOrders />}
      />

      <Route
        path="/admin/customers"
        element={<AdminCustomers />}
      />

      <Route
        path="/admin/deliveries"
        element={<AdminDeliveries />}
      />

      <Route
        path="/admin/sales"
        element={<AdminSales />}
      />

      <Route
        path="/admin/expenses"
        element={<AdminExpenses />}
      />

      <Route
        path="/admin/profit"
        element={<AdminProfit />}
      />

      <Route
        path="/admin/settings"
        element={<AdminSettings />}
      />

    </Routes>
  );
}

export default App;
