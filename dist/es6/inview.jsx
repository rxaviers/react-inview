import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom";
import "jquery-inview";

var Inview = React.createClass({
  componentDidMount: function() {
    const self = this;
    const element = ReactDOM.findDOMNode(this);
    this.active = true;
    $(element).on("inview", function() {
      if (self.active) {
        self.active = false;
        self.props.onInview.apply(self.props.onInview, arguments);
      }
    });
  },

  componentDidUpdate: function() {
    this.active = true;
    setTimeout($.inviewCheck, 100);
  },

  componentWillUnmount: function() {
    const element = ReactDOM.findDOMNode(this);
    $(element).off("inview");
  },

  render: function() {
    return this.props.children || <div></div>;
  }
});

export default Inview;
