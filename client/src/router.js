import React from 'react';
import { Router, Route } from 'dva/router';
import Layout from './components/Layout';
import IndexPage from './routes/IndexPage';
import Home from './routes/Home';
import FastRecord from './routes/FastRecord';
import NewRecord from './routes/NewRecord';
import Record from './routes/Record';
import OilBill from './routes/OilBill';
import RecordLog from './routes/RecordLog';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route component={Layout}>
        <Route path="/home" component={Home} />
        <Route path="/fast" component={FastRecord} />
        <Route path="/daily" component={NewRecord} />
        <Route path="/record" component={Record} />
        <Route path="/oil" component={OilBill} />
        <Route path="/log" component={RecordLog} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
