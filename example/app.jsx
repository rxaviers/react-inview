/* global fixture, React, List */

function SimpleModel() {
  this.perPage = 10;
  this.page = 0;
}

SimpleModel.prototype.nextPage = function(callback) {
  var start = this.page * this.perPage;
  var end = start + this.perPage;
  var data = fixture.slice(start, end);
  console.log("- fetching the next page...");
  setTimeout(function() {
    this.page++;
    console.log("- fetched");
    callback(data);
  }.bind(this), 500);
};

var App = React.createClass({
  getInitialState: function() {
    this.model = new SimpleModel();
    return {
      list: [],
      fetching: true
    };
  },

  handleMore: function() {
    console.log("Handling more data...");
    this.model.nextPage(function(nextPage) {
      console.log("- update state");
      if (!nextPage.length) {
        console.log("- no more pages to fetch");
      }
      console.log("- update state");
      this.setState({
        list: this.state.list.concat(nextPage),
        fetching: !!nextPage.length
      });
    }.bind(this));
  },

  render: function() {
    return (
      <List
        list={this.state.list}
        fetching={this.state.fetching}
        onMore={this.handleMore}
      />
    );
  }
});

React.render(<App />, document.getElementById("app"));
