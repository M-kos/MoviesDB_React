import React, { Component } from 'react';
import debounce from 'lodash/debounce';

import MovieDbService from '../../services/movieDbService';
import Spinner from '../Spinner/Spinner';
import ViewError from '../ViewError/ViewError';
import ViewCards from '../ViewCards/ViewCards';
import SearchInput from '../SearchInput/SearchInput';
import PaginationComponent from '../PaginationComponent/PaginationComponent';

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
    page: 1,
    total: 0,
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

  paginationHandler = (event) => {
    this.setState(
      {
        page: event,
      },
      () => {
        const { inputValue } = this.state;

        if (inputValue) {
          this.uploadMovies(inputValue);
        }
      }
    );
  };

  async uploadMovies(value = '') {
    if (!value) {
      return;
    }

    this.setState({
      loading: true,
      movies: [],
    });

    const { page } = this.state;

    try {
      const res = await movieDbService.getMovies(value, page);
      if (res) {
        this.setState({
          movies: res.movies,
          total: res.total,
          loading: false,
        });
      }
    } catch (error) {
      this.onError(error);
    }
  }

  render() {
    const { movies, loading, error, errorMessage, inputValue, total } = this.state;

    const viewLoading = loading ? <Spinner /> : null;
    const viewError = error ? <ViewError message={errorMessage} /> : null;
    const viewCards = !(viewLoading && viewError) ? (
      <ViewCards movies={movies} getImageUrl={movieDbService.getImage} />
    ) : null;
    const pagination = movies.length ? <PaginationComponent total={total} onChange={this.paginationHandler} /> : null;

    return (
      <div className="app">
        <SearchInput value={inputValue} inputHandler={this.inputHandler} />
        {viewLoading}
        {viewError}
        {viewCards}
        {pagination}
      </div>
    );
  }
}
