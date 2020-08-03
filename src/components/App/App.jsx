import React, { Component } from 'react';

import { Row, Col } from 'antd';
import MovieCard from '../MovieCard/MovieCard';
import MovieDbService from '../../services/movieDbService';

import 'antd/dist/antd.css';
import './App.css';

const movieDbService = new MovieDbService();
export default class App extends Component {
  state = {};

  async componentDidMount() {
    const res = await movieDbService.getMovies('return');

    if (res) {
      this.setState(res);
    }
  }

  render() {
    const { results } = this.state;

    let cards = null;

    if (results) {
      cards = results.slice(0, 6).map((movie) => {
        return (
          <Col key={movie.id} md={12} sm={24}>
            <MovieCard movie={movie} imageUrl={movieDbService.getImage(movie.poster_path)} />
          </Col>
        );
      });
    }

    return (
      <div className="app">
        <Row
          gutter={[
            { xs: 16, sm: 16, md: 36 },
            { xs: 20, sm: 20, md: 36 },
          ]}
          sm={24}
        >
          {cards}
        </Row>
      </div>
    );
  }
}
