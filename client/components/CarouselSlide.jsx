/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  CarouselSelected, CurrentViewVideo, CurrentViewImage,
} from '../StyledComponents.jsx';

class CarouselSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const item = this.props.selected;

    return (
      <CarouselSelected>
        {item.video !== undefined && (
        <CurrentViewVideo alt="Game trailer" src={item.video.video} controls />
        )}
        {item.image !== undefined && (
        <CurrentViewImage src={item.image} alt="Enlarged screenshot" />
        )}
      </CarouselSelected>
    );
  }
}

export default CarouselSlide;
