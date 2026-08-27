import './App.css';

function App() {
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
            <div className="product-actions">
              <a href="#contact" className="btn-primary">Request Quote</a>
              <a href="#contact" className="btn-secondary">Order Now</a>
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
    </>
  );
}

export default App;
