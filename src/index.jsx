import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import App from './components/App/App';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Layout hasSider="false" className="layout">
      <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);
