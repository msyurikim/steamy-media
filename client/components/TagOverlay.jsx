/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Shadow, TagOverlayModal, TagHeader, ColorBar, OverlayExit, OverlayHeader, TagBody, TagOverlayText, OverlayGrid, TagCol1, TagCol2, TagList, TagPrompt, TagInfo, OverlayHover, OverlaySignin, CloseButton, OverlayTag, TagOverlayList,
} from '../StyledComponents.jsx';

class TagOverlay extends React.Component {
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
    const { tags } = this.props;

    return (
      <div>
        <Shadow />
        <TagOverlayModal>
          {this.state.hover && (<OverlayHover>These are tags applied to the product by the most users.  You can click a tag to find other products with that tag applied.  Or, you can hit the plus symbol for any existing tags to increase that tag`&apos;`s  popularity on this product</OverlayHover>) }
          <TagHeader>
            <ColorBar />
            <OverlayExit onClick={() => { this.props.overlayHandler(); }}>X</OverlayExit>
            <OverlayHeader>VIEW AND EDIT TAGS FOR THIS PRODUCT</OverlayHeader>
          </TagHeader>
          <TagBody>
            <OverlayGrid>
              <TagCol1>
                <TagPrompt>
                  Popular user-defined tags for this product:
                  <TagInfo onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>(?)</TagInfo>
                </TagPrompt>
                <TagList>
                  {tags.map((tag, index) => <TagOverlayList key={index}><OverlayTag type="button">{tag}</OverlayTag></TagOverlayList>)}
                </TagList>
              </TagCol1>
              <TagCol2>
                <TagPrompt>Sign in</TagPrompt>
                <TagOverlayText>Sign in to add your own tags to this product.</TagOverlayText>
                <OverlaySignin type="button">Sign in</OverlaySignin>
              </TagCol2>
            </OverlayGrid>
            <CloseButton onClick={() => { this.props.overlayHandler(); }} type="button">Close</CloseButton>
          </TagBody>
        </TagOverlayModal>
      </div>
    );
  }
}

export default TagOverlay;
