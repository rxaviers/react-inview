/* global React, Inview */

var List = React.createClass({ // eslint-disable-line no-unused-vars
  handleMore: function() {
    this.props.onMore();
  },

  render: function() {
    var list;
    var meristem;

    if (this.props.fetching) {
      meristem = <Inview onInview={this.handleMore}><div>Loading...</div></Inview>;
    }

    if (this.props.list.length) {
      list = (
        <table>
          <thead>
            <tr>
              <th>Currency ISO code</th>
              <th>Currency name</th>
            </tr>
          </thead>
          <tbody>
            {this.props.list.map(function(item) {
              return (
                <tr key={item.code}>
                  <td>{item.code}</td>
                  <td>{item.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }

    return (
      <div>
        {list}
        {meristem}
      </div>
    );
  }
});
