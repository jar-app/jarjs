import * as React from 'react';
import { Route } from 'react-router';

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});
export const route = <Route path="/" component={CommentBox} />