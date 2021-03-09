import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktails',
        info:
          'Adipisicing sunt dolore amet commodo do incididunt. Eiusmod est ex ipsum et magna adipisicing anim enim minim aute ipsum.',
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info:
          'Adipisicing sunt dolore amet commodo do incididunt. Eiusmod est ex ipsum et magna adipisicing anim enim minim aute ipsum.',
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free shuttle',
        info:
          'Adipisicing sunt dolore amet commodo do incididunt. Eiusmod est ex ipsum et magna adipisicing anim enim minim aute ipsum.',
      },
      {
        icon: <FaBeer />,
        title: 'Strongest Beer',
        info:
          'Adipisicing sunt dolore amet commodo do incididunt. Eiusmod est ex ipsum et magna adipisicing anim enim minim aute ipsum.',
      },
    ],
  };
  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
