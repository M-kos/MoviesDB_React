import React, { Component } from 'react';

import { Row, Col } from 'antd';
import MovieCard from '../MovieCard/MovieCard';
import MovieDbService from '../../services/movieDbService';

import 'antd/dist/antd.css';
import './App.css';

export default class App extends Component {
  async componentDidMount() {
    const movieDbService = new MovieDbService();

    const res = await movieDbService.getMovies('return');

    console.log('res', res);
  }

  render() {
    return (
      <div className="app">
        <Row
          gutter={[
            { xs: 16, sm: 20, md: 36 },
            { xs: 20, sm: 20, md: 36 },
          ]}
          sm={24}
        >
          <Col md={12} sm={24}>
            <MovieCard />
          </Col>
          <Col md={12} sm={24}>
            <MovieCard />
          </Col>
        </Row>
      </div>
    );
  }
}
