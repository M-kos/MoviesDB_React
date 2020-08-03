import React, { Component } from 'react';

import MovieDbService from '../../services/movieDbService';
import Spinner from '../Spinner/Spinner';
import ViewError from '../ViewError/ViewError';
import ViewCards from '../ViewCards/ViewCards';

import 'antd/dist/antd.css';
import './App.css';

const movieDbService = new MovieDbService();
export default class App extends Component {
  state = {
    movies: [],
    loading: true,
    error: false,
    errorMessage: '',
  };

  async componentDidMount() {
    this.uploadMovies();
  }

  onError = (error) => {
    this.setState({
      loading: false,
      error: true,
      errorMessage: error.message,
    });
  };

  uploadMovies = async () => {
    try {
      const res = await movieDbService.getMovies('retqweqweqeqweqwurn');
      if (res) {
        this.setState({
          movies: res,
          loading: false,
        });
      }
    } catch (error) {
      this.onError(error);
    }
  };

  render() {
    const { movies, loading, error, errorMessage } = this.state;

    const viewLoading = loading ? <Spinner /> : null;
    const viewError = error ? <ViewError message={errorMessage} /> : null;
    const viewCards = !(viewLoading && viewError) ? (
      <ViewCards movies={movies.slice(0, 6)} getImageUrl={movieDbService.getImage} />
    ) : null;

    return (
      <div className="app">
        {viewLoading}
        {viewError}
        {viewCards}
      </div>
    );
  }
}
