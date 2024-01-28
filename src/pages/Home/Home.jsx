import { About, Hero, Specials, Testimonials } from './components';
import { Main } from '../../components';

import specials from '../../data/specials.json';
import testimonials from '../../data/testimonials.json';

export const Home = () => {
  return (
    <Main>
      <Hero />
      <Specials data={specials} itemWidth="300px" />
      <Testimonials data={testimonials} />
      <About />
    </Main>
  );
};
