import React from 'react';
import image1 from './image1.jpg';
import greekSaladImg from './greek-salad.jpg';
import bruschettaImg from './bruschetta.svg';
import lemonDessertImg from './lemon-dessert.jpg';
import brothersImg from './Mario and Adrian b.jpg';
import restaurantImg from './restaurant.jpg';
import deliveryIconImg from './delivery-icon.png';

function Main() {
  return (
    <>
    <main className="main">
      <section className="headings">
        <h1 id="main-heading">Little Lemon</h1>
        <h2 id="sub-heading">Chicago</h2>
        <p id="paragraph1">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button className="reservation-button">Reserve a Table</button>
      </section>

      <section className="image-section">
        <img src={image1} height={450} width={350} alt="serving-food" />
      </section>
    </main>

      <section className="specials-section">
          <h1>Specials</h1>
          <button className="online-menu-button">Online Menu</button>
      </section>

      <section className="cards-section">
      <div className="card">
        <img src={greekSaladImg} alt="Greek Salad" className="card-image" width="250" />
        <div className="card-content">
        <div className="card-header">
          <h2>Greek Salad</h2>
          <p className="price">$12.99</p>
        </div>
          <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
        <div className="order-header">
          <p className="order1">Order a delivery</p>
          <img src={deliveryIconImg} height={30} width={30} alt="delivery icon" />
        </div>
        </div>
      </div>

      <div className="card">
        <img src={bruschettaImg} alt="Bruschetta" className="card-image" width="250" />
        <div className="card-content">
        <div className="card-header">
          <h2>Bruschetta</h2>
          <p className="price">$5.99</p>
          </div>
          <p>Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
        <div className="order-header">
          <p className="order1">Order a delivery</p>
          <img src={deliveryIconImg} height={30} width={30} alt="delivery icon" />
        </div>
        </div>
      </div>

      <div className="card">
        <img src={lemonDessertImg} alt="Lemon Dessert" className="card-image" width="210" />
        <div className="card-content">
        <div className="card-header">
          <h2>Lemon Dessert</h2>
          <p className="price">$5.00</p>
          </div>
          <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
          <div className="order-header">
          <p className="order1">Order a delivery</p>
          <img src={deliveryIconImg} height={30} width={30} alt="delivery icon" />
        </div>
        </div>
      </div>
    </section>

    <section className="headings3">
        <h1 id="main-heading3">Testimonials</h1>

    <section className="testimonials-section">
    <section className="card2">
        <section class="star-rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </section>
        <section class="imageAndName">
        <img src="https://ui-avatars.com/api/?name=Ryan+M&size=128" width="70" alt="User Placeholder" />
        <h2 id="sub-heading3">Ryan M.</h2>
        </section>
        <p id="paragraph3">The Bruschetta was great!</p>
        </section>

        <section className="card2">
        <section class="star-rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </section>
        <section class="imageAndName">
        <img src="https://ui-avatars.com/api/?name=Alan+Garcia&size=128" width="70" alt="User Placeholder" />
        <h2 id="sub-heading3">Alan Garcia</h2>
        </section>
        <p id="paragraph3">You have to try their Lemon Dessert!</p>
        </section>

        <section className="card2">
        <section class="star-rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </section>
        <section class="imageAndName">
        <img src="https://ui-avatars.com/api/?name=Alexandra+Holmes&size=128" width="70" alt="User Placeholder" />
        <h2 id="sub-heading3">Alexandra Holmes</h2>
        </section>
        <p id="paragraph3">Awesome place and atmosphere with delicious food.</p>
        </section>

        <section className="card2">
        <section class="star-rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </section>
        <section class="imageAndName">
        <img src="https://ui-avatars.com/api/?name=Elizabeth+Hastings&size=128" width="70" alt="User Placeholder" />
        <h2 id="sub-heading3">Elizabeth Hastings</h2>
        </section>
        <p id="paragraph3">Really enjoyed the menu selection and venue atmosphere.</p>
        </section>
    </section>
    </section>

    <section className="container1">
    <section className="headings2">
        <h1 id="main-heading2">Little Lemon</h1>
        <h2 id="sub-heading2">Chicago</h2>
        <p id="paragraph2">Little Lemon is a restaurant in Chicago. It is owned by two Italian brothers, Mario and Adrian. Having relocated to the U.S., Mario brings his Italian culinary expertise and cherished family recipes to create the menu. Adrian manages the restaurant's marketing and the expansion of their offerings to include a variety of Mediterranean dishes, enhancing their traditional Italian cuisine.</p>
    </section>

    <section className="image-section3">
        <img src={brothersImg} height={350} width={500} alt="two Italian brothers" className="image-bottom" />
        <img src={restaurantImg} height={350} width={500} alt="restaurant outdoor" className="image-top" />
    </section>
    </section>
    </>
  );
}

export default Main;
