import React, {Component} from "react";

class List extends Component {
  constructor(props) {
    super();
  }

  render() {
    console.log("props => ", this.props);
    console.log(
      "this.props[this.props.category] =>",
      this.props[this.props.category]
    );

    let objArr = this.props[this.props.category];
    //^^^the array of films/people/etc.

    return (
      <div>
        {objArr.length > 0 ? (
          <div>
            <h1>{this.props.category}</h1>
            <ul>
              {Object.keys(objArr[0]).includes("title")
                ? this.props[this.props.category].map(item => {
                    return <li>{item["title"]}</li>;
                  })
                : this.props[this.props.category].map(item => {
                    return <li>{item["name"]}</li>;
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
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default List;
