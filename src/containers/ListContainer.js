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

    this.state = {
      page: 1
    };

    this.changePage = this.changePage.bind(this);
  }

  changePage(e) {
    e.preventDefault();
    let pageNum = e.target.value;
    this.setState({page: pageNum});
    this.props.starWarsAction(this.state.page);
  }

  render() {
    let path = this.props.match.path.split("/")[1];

    return (
      <List
        changePage={this.changePage}
        category={path}
        page={this.state.page}
        films={this.props.films}
        people={this.props.people}
        planets={this.props.planets}
        species={this.props.species}
        starships={this.props.starships}
        vehicles={this.props.vehicles}
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
    vehicles: state.vehicles,
    isFetching: state.isFetching
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
