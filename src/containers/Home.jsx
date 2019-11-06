import React from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useTvShowsApi from '../hooks/useTvShowsApi';

const API = 'http://localhost:3000/initalState';

const Home = () => {
  const initialState = useTvShowsApi(API);

  return initialState.length === 0 ? <h1>Loading...</h1> : (
    <>
      <Search />
      {
        initialState.mylist.length > 0 &&
        (
          <Categories title='Mi Lista'>
            <Carousel>
            {initialState.mylist.map(item =>
              <CarouselItem key={item.id} {...item} />
            )}
          </Carousel>
          </Categories>
        )

      }
      <Categories title='Tendencias'>
        <Carousel>
          {initialState.trends.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>

      <Categories title='Originals'>
        <Carousel>
          {initialState.originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
    </>
  );
};

export default Home;
