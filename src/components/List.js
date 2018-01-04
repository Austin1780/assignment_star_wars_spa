import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super();
  }

  render() {
    let results = this.props.results;
    console.log("===============================");
    console.log(this.props);
    console.log("===============================");

    return (
      <div>
        {this.props.firstKeyName === "EMPTY" ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h1>{this.props.category}</h1>
            <ul>
              {results.map(item => {
                return <li>{item[`${this.props.firstKeyName}`]}</li>;
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
        )}
      </div>
    );
  }
}

export default List;
