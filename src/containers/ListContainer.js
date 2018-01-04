import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//our component
import List from "../components/List";

//actions to be used
import { starWarsAction } from "../actions";

//creating our own container
class ListContainer extends Component {
  constructor(props) {
    super();

    let path = props.match.path.split("/")[1];

    // let { category } = this.props.category;
    // let results = this.props[category];
    // let firstKeyName = "EMPTY";
    // if (!results) {
    // } else if (results.length !== 0) {
    //   let firstresultsObj = results[0];
    //   firstKeyName = Object.keys(firstresultsObj)[0];
    // }

    let results;
    if (this.props === undefined) {
      results = undefined;
    } else {
      results = this.props[path];
    }

    this.state = {
      category: path,
      page: 1,
      results: results,
      firstKeyName: "EMPTY"
    };

    this.changePage = this.changePage.bind(this);
  }

  componentUpdate(prevProps, prevState) {
    if (prevState.results !== undefined && prevState.results === []) {
      let { category } = this.state.category;
      let results = this.props[category];
      let firstKeyName = "EMPTY";
      if (!results) {
      } else if (results.length !== 0) {
        let firstresultsObj = results[0];
        firstKeyName = Object.keys(firstresultsObj)[0];
      }
      this.setState({
        results: this.props[category],
        firstKeyName: firstKeyName
      });
    }
  }

  changePage(e) {
    e.preventDefault();
    let pageNum = this.target.value;
    this.setState({ page: pageNum });
    this.props.starWarsAction(this.state.page);
  }

  render() {
    return (
      <List
        results={this.state.results}
        changePage={this.state.changePage}
        category={this.state.category}
        page={this.state.page}
        firstKeyName={this.state.firstKeyName}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    films: state.films,
    people: state.people,
    planets: state.planets,
    species: state.species,
    starships: state.starships,
    vehicles: state.vehicles
  };
};

const mapDispatchToProps = dispatch => {
  // Create an object with the action creators
  // (or, import them as a named object)
  const actions = {
    starWarsAction
  };

  // Returns exactly the same code as above
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
