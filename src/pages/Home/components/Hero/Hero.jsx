import { useNavigate } from "react-router-dom";
import { Button, Heading } from "../../../../components";
import "./Hero.css";
import src from "../../../../assets/images/restauranfood.jpg";
import { Link } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="LL-Hero call-to-action">
      <div className="container ">
        <div className="row">
          <div className="col-md-6 hero-content">
          <Heading tag="h1" size="2xl">
          Little Lemon
        </Heading>
          
            <h2 className="subtitle">Chicago</h2>
            <p className="description">
              Little Lemon is a charming neghborhood bistro that serves simple
              food and classic cocktails in a lively but casual environment. The
              restaurant features a locally-sourced menu with daily specials.
            </p>
            <Button
          ariaLabel="Reserve a Table"
          id="LL-Hero-btn"
          primary
          onClick={() => navigate("/bookings")}
        >
          Reserve a Table
        </Button>
          </div>
          <div className="col-md-6 image">
           
            <img src={src} alt="Little Lemon - Hero" />
          </div>
        </div>
      </div>


    
    </section>
  );
};
