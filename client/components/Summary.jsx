/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Tags from './Tags.jsx';
import {
  GameSummary, SplashContainer, SplashImage, Description,
  SummaryOverlay, ReviewStats, Grid3, BlerbHeader, ReviewValue, ReviewCount,
  TopPadding, ReleaseDate, DevHeader, PubHeader, Blerb, TagHeader,
} from '../StyledComponents.jsx';

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
    this.handleMouseHover = this.handleMouseHover.bind(this);
  }

  handleMouseHover() {
    if (this.state.hover === false) {
      this.setState({ hover: true });
    } else if (this.state.hover === true) {
      this.setState({ hover: false });
    }
  }

  render() {
    const dateObject = new Date(this.props.details.releaseDate);
    const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const date = dateObject.getDate();
    const month = dateObject.getMonth();
    const year = dateObject.getFullYear();
    const dateString = `${months[month]} ${date}, ${year}`;
    const { details } = this.props;

    return (
      <GameSummary>
        <SplashContainer><SplashImage src={details.splash} alt="Game Splash" className="media-splash" /></SplashContainer>
        <Description>{details.description}</Description>
        {this.state.hover === true && (
          <SummaryOverlay>
            <ReviewStats>
              {details.percentage}
              % of the&nbsp;
              {details.reviews.total}
              {' '}
              user reviews for this game are negative.
              {' '}
            </ReviewStats>
          </SummaryOverlay>
        )}
        <Grid3>
          <span>
            <BlerbHeader>
              ALL REVIEWS:
            </BlerbHeader>
          </span>
          <ReviewValue onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
            {details.reviews.general}
            <ReviewCount>
              {' '}
              (
              {details.reviews.total}
              )
            </ReviewCount>
          </ReviewValue>
          <TopPadding><BlerbHeader>RELEASE DATE: </BlerbHeader></TopPadding>
          <ReleaseDate>{dateString}</ReleaseDate>
          <TopPadding><BlerbHeader>DEVELOPER: </BlerbHeader></TopPadding>
          <DevHeader><Blerb>{details.developer}</Blerb></DevHeader>
          <PubHeader><BlerbHeader>PUBLISHER: </BlerbHeader></PubHeader>
          <span><Blerb>{details.publisher}</Blerb></span>
        </Grid3>
        <TagHeader>Popular user-defined tags for this product:</TagHeader>
        <Tags tagList={details.tags} overlayHandler={this.props.overlayHandler} />
      </GameSummary>
    );
  }
}

export default Summary;
