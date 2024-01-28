import { Card, Heading, ReviewStar } from '../../../../components';
import './Testimonials.css';

const images = require.context("../../../../assets/images/testimonials", true);
const imageList = images.keys().map((image) => images(image));

const imgHeight = '400px';

export const Testimonials = ({ data }) => {



  return (
    <section id="testimonials" className="LL-Testimonials">
      <Heading size="xl" align="center">
        Testimonials
      </Heading>
      <section className="LL-Testimonials-Carousel">
        {data.map(({ id, rating, name, review, imgHeight }) => (
          <Card
            key={`testimonial-card-${name.trim()}-${id}`}
            title={`Testimonial by ${name}`}
            imagePosition="left"
            image={imageList[id-1]}
            imgHeight={imgHeight}
          >
            <Heading tag="h3" size="base" className="LL-Testimonial-Name">
              {name}
            </Heading>
            <div className="LL-Testimonial-Rating flex">
              {Array.from(
                { length: Math.round(Math.abs(Number(rating))) },
                (v, i) => (
                  <ReviewStar key={`reviewstar-${name.trim()}-${i}`} />
                )
              )}
            </div>
            <p className="LL-Testimonial-Review">{review}</p>
          </Card>
        ))}
      </section>
    </section>
  );
};
