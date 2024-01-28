import { Button, Card, Heading } from "../../../../components";
// import { FoodCard } from '../FoodCard/FoodCard';
import "./Specials.css";
import specials from "../../../../data/specials.json";
//import image1 from '../../../../assets/images/testimonials';



const images = require.context("../../../../assets/images/specials", true);
const imageList = images.keys().map((image) => images(image));

export const Specials = ({ data, itemWidth }) => {

  const imgHeight = '300px';

  return (
    <section id="specials" className="LL-Specials">
      <section className="specials-titlebar">
        <Heading size="lg">Specials</Heading>
        <Button>Online Menu</Button>
      </section>

      <section id="LL-Section-SpecialItems">
     
          {data.map(({ id, title, price, description, image, imgHeight }) => (
            <Card key={id} title={title} width={itemWidth} image={imageList[id-1]} imgHeight={imgHeight}  >
              <div className="LL-CardHeader card-variant-food">
                <Heading tag="h3" size="m" className="food-title">
                  {title}
                </Heading>
                <p className="food-price">${price}</p>
              </div>
              <div className="food-desc">{description}</div>

              <div className="card-footer LL-OrderButton">
                <Button class="btn-order" primary>
                  Order
                </Button>
              </div>
            </Card>
          ))}
      
      </section>
    </section>
  );
};
