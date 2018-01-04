import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

//our component
import List from "../components/List";

//actions to be used
import {starWarsAction} from "../actions";

//creating our own container
class ListContainer extends Component {
  constructor(props) {
    super();

    let path = props.match.path.split("/")[1];

    this.state = {
      category: path,
      page: 1
    };

    this.changePage = this.changePage.bind(this);
  }

  changePage(e) {
    e.preventDefault();
    let pageNum = this.target.value;
    this.setState({page: pageNum});
    this.props.starWarsAction(this.state.page);
  }

  render() {
    let results = this.props[this.state.category];

    return (
      <List
        results={results}
        changePage={this.state.changePage}
        category={this.state.category}
        page={this.state.page}
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
