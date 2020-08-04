import React, { Component } from 'react';
import debounce from 'lodash/debounce';

import MovieDbService from '../../services/movieDbService';
import Spinner from '../Spinner/Spinner';
import ViewError from '../ViewError/ViewError';
import ViewCards from '../ViewCards/ViewCards';
import SearchInput from '../SearchInput/SearchInput';

import 'antd/dist/antd.css';
import './App.css';

const movieDbService = new MovieDbService();
export default class App extends Component {
  state = {
    movies: [],
    loading: false,
    error: false,
    errorMessage: '',
    inputValue: '',
  };

  searchHandlerDebounced = debounce(this.uploadMovies, 800);

  onError = (error) => {
    this.setState({
      loading: false,
      error: true,
      errorMessage: error.message,
    });
  };

  inputHandler = (event) => {
    const inputValue = event.target.value.trim();

    if (!inputValue) {
      this.setState({
        movies: [],
      });
    }

    this.setState({
      inputValue,
    });

    this.searchHandlerDebounced(inputValue);
  };

  async uploadMovies(value = '') {
    if (!value) {
      return;
    }

    this.setState({
      loading: true,
    });

    try {
      const res = await movieDbService.getMovies(value);
      if (res) {
        this.setState({
          movies: res,
          loading: false,
        });
      }
    } catch (error) {
      this.onError(error);
    }
  }

  render() {
    const { movies, loading, error, errorMessage, inputValue } = this.state;

    const viewLoading = loading ? <Spinner /> : null;
    const viewError = error ? <ViewError message={errorMessage} /> : null;
    const viewCards = !(viewLoading && viewError) ? (
      <ViewCards movies={movies.slice(0, 6)} getImageUrl={movieDbService.getImage} />
    ) : null;

    return (
      <div className="app">
        <SearchInput value={inputValue} inputHandler={this.inputHandler} />
        {viewLoading}
        {viewError}
        {viewCards}
      </div>
    );
  }
}
