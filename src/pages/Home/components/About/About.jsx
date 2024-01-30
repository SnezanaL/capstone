import { Heading, Stack } from '../../../../components';
import './About.css';
import src1 from '../../../../assets/images/restaurant chef B.jpg';
import src2 from '../../../../assets/images/Mario and Adrian b.jpg';


export const About = () => {
  return (
    <section id="about">
      <Stack className="about-columns" justify="space-between">
        <Stack.Item
          className="about-left-column"
          vertical
          gap="2.25rem"
          basis="50%"
        >
          <Stack.Item vertical>
            <Heading tag="h2" size="xl">Little Lemon</Heading>
            <Heading  tag="h2" size="lg">Chicago</Heading>
          </Stack.Item>

          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
        </Stack.Item>

        <section id="about" className="about-right-column">
          <section id="about-images">
            <div id="about-first-image">
              <img
                src={src1}
                alt="Little Lemon - Chef"
              />
            </div>
            <div id="about-second-image">
              <img
                src={src2}
                alt="Little Lemon - Mario and Adrian"
              />
            </div>
          </section>
        </section>
      </Stack>
    </section>
  );
};
