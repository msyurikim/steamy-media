/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  SummaryTag, TagListItem, TagList,
} from '../StyledComponents.jsx';

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const tags = this.props.tagList;
    const tagHighlights = tags.slice(0, 3);

    return (
      <div>
        <TagList>
          {tagHighlights.map((tag, index) => <TagListItem key={index}><SummaryTag type="button">{tag}</SummaryTag></TagListItem>)}
          <TagListItem><SummaryTag onClick={() => { this.props.overlayHandler(); }} type="button"> + </SummaryTag></TagListItem>
        </TagList>
      </div>
    );
  }
}

export default Tags;
