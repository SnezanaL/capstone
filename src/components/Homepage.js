import imageMario from "./../images/Mario and Adrian b.jpg";
import imgDelivery from "../images/delivery.svg";
import greekSalad from "../images/greek salad.jpg";
import bruchetta from "../images/bruchetta.svg";
import lemonDesert from "../images/lemon dessert.png";
import testImage from "../images/testimonial.jpg";
import { Link } from "react-router-dom";
import React from 'react';

const HomePage = () => {
  return (
    <>
      <main>
        <section className="call-to-action">
          <div className="container ">
            <div className="row">
              <div className="col">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="description">
                  Little Lemon is a charming neghborhood bistro that serves
                  simple food and classic cocktails in a lively but casual
                  environment. The restaurant features a locally-sourced menu
                  with daily specials.
                </p>
                <Link to="/booking" className="reserve-table btn">Reserve a Table</Link>
              </div>
              <div className="col">
                <img src={imageMario} />
              </div>
            </div>
          </div>
        </section>

        <section className="specials">
          <div className="container">
            <div className="row spec-row">
              <div className="inline-row ">
                <h2>Specials</h2>
                <button className="spec-btn btn">Online Menu</button>
              </div>
              <div className="col-4">
                <div className="box-special">
                  <img src={greekSalad} />
                  <div className="spec-content">
                    <h3>
                      Greek Salad <span>$12.99</span>
                    </h3>
                    <p>
                      The famous greek salad of crispy lettuce, peppers, olives
                      and our Chicago style feta cheese, garnished with crunchy
                      garlic and rosemary croutons.
                    </p>
                    <h4>
                      Order a delivery
                      <img src={imgDelivery} />
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="box-special">
                  <img src={bruchetta} />
                  <div className="spec-content">
                    <h3>
                      Bruchetta <span>$ 5.99</span>
                    </h3>
                    <p>
                      Our Bruschetta is made from grilled bread that has been
                      smeared with garlic and seasoned with salt and olive oil.
                    </p>
                    <h4>
                      Order a delivery
                      <img src={imgDelivery} />
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="box-special">
                  <img src={lemonDesert} />
                  <div className="spec-content">
                    <h3>
                      Lemon Dessert <span>$ 5.00</span>
                    </h3>
                    <p>
                      This comes straight from grandma’s recipe book, every last
                      ingredient has been sourced and is as authentic as can be
                      imagined.
                    </p>
                    <h4>
                      Order a delivery
                      <img src={imgDelivery} />
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <div className="container">
            <h1>Testimonials</h1>
            <div className="row">
              <div className="col">
                <div className="box-testim">
                  <h4>Rating</h4>
                  <div className="testimon-img">
                    <img src={testImage} />
                    <h4>Name</h4>
                  </div>
                  <p>Review text</p>
                </div>
              </div>
              <div className="col">
                <div className="box-testim">
                  <h4>Rating</h4>
                  <div className="testimon-img">
                    <img src={testImage} />
                    <h4>Name</h4>
                  </div>
                  <p>Review text</p>
                </div>
              </div>
              <div className="col">
                <div className="box-testim">
                  <h4>Rating</h4>
                  <div className="testimon-img">
                    <img src={testImage} />
                    <h4>Name</h4>
                  </div>
                  <p>Review text</p>
                </div>
              </div>
              <div className="col">
                <div className="box-testim">
                  <h4>Rating</h4>
                  <div className="testimon-img">
                    <img src={testImage} />
                    <h4>Name</h4>
                  </div>
                  <p>Review text</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about">
          <div className="container ">
            <div className="row">
              <div className="col">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="description">
                  Little Lemon is a charming neghborhood bistro that serves
                  simple food and classic cocktails in a lively but casual
                  environment. The restaurant features a locally-sourced menu
                  with daily specials.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
};

export default HomePage;
