import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "./MovieItem";
import propTypes from "prop-types";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const mapStateToProps = state => ({
  movies: state.moviesReducer.movies
});

let flex = {};

class Movies extends React.Component {
  render() {
    return (
      <Flex>
        {this.props.movies.map(movie => {
          return <MovieItem key={movie.id} movie={movie} />;
        })}
      </Flex>
    );
  }
}

Movies.propTypes = {
  movies: propTypes.array
};

export default connect(mapStateToProps, null)(Movies);
