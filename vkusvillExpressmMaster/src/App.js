
import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import { withRouter} from "react-router-dom";
import 'antd/dist/antd.css';
import AppRoute from './routes/AppRoute';
import './index.css';

@withRouter
@inject("store")
@observer
class App extends Component {
  componentDidMount() {
    if (process.env.NODE_ENV === "development") {
      window.store = this.props.store;
    } else {
      console = { ...console, log: () => { }, info: () => { }, warn: () => { }, table: () => { } };
    }
  }
  render() {
    return (
      <AppRoute/>
    );
  }
}

export default App;
