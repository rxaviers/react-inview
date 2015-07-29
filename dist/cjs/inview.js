'use strict';

"use strict";

var $ = require('jquery');
var React = require('react');
require('jquery-inview');

var Inview = React.createClass({
  displayName: "Inview",

  componentDidMount: function componentDidMount() {
    var self = this;
    var element = React.findDOMNode(this);
    this.active = true;
    $(element).on("inview", function () {
      if (self.active) {
        self.active = false;
        self.props.onInview.apply(self.props.onInview, arguments);
      }
    });
  },

  componentDidUpdate: function componentDidUpdate() {
    this.active = true;
    setTimeout($.inviewCheck, 100);
  },

  componentWillUnmount: function componentWillUnmount() {
    var element = React.findDOMNode(this);
    $(element).off("inview");
  },

  render: function render() {
    return this.props.children || React.createElement("div", null);
  }
});

module.exports = Inview;