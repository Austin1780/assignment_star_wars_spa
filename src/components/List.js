import React, {Component} from "react";

class List extends Component {
  constructor(props) {
    super();
  }

  render() {
    let results = this.props.results;
    let firstresultsObj = results[0];
    let firstKeyName = Object.keys(firstresultsObj)[0];

    return (
      <div>
        <h1>{this.props.category}</h1>
        <ul>
          {results.map(item => {
            return <li>{item[`${firstKeyName}`]}</li>;
          })}
        </ul>
        {this.props.page === 1 ? null : (
          <input
            type="button"
            placeholder="back"
            onClick={this.props.changePage}
            value={this.props.page - 1}
          />
        )}
        <input
          type="button"
          placeholder="next"
          onClick={this.props.changePage}
          value={this.props.page + 1}
        />
      </div>
    );
  }
}

export default List;
