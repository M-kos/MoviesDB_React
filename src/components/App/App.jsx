import React, { Component } from 'react';

import MovieDbService from '../../services/movieDbService';
import Spinner from '../Spinner/Spinner';
import ViewCards from '../ViewCards/ViewCards';

import 'antd/dist/antd.css';
import './App.css';

const movieDbService = new MovieDbService();
export default class App extends Component {
  state = {
    movies: [],
    loading: true,
  };

  async componentDidMount() {
    const res = await movieDbService.getMovies('return');

    if (res && res.results) {
      this.setState({
        movies: res.results,
        loading: false,
      });
    }
  }

  render() {
    const { movies, loading } = this.state;

    const view = loading ? (
      <Spinner />
    ) : (
      <ViewCards movies={movies.slice(0, 6)} getImageUrl={movieDbService.getImage} />
    );

    return <div className="app">{view}</div>;
  }
}
