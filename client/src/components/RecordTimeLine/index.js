import React, { Component } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import RecordTimeItem from './RecordTimeItem';

import './style.less';

class RecordTimeLine extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'record/getDaily', payload: { date: moment().format('YYYY-MM-DD') } });
  }

  render() {
    const { time_line_data = [] } = this.props;
    return (
      <div className="time-line">
        <header>
          <span className="left">今日打卡记录</span>
          <span className="right">共<strong>{time_line_data.length}</strong>条记录</span>
        </header>
        <div className="time-line-item-group time-line-item-group-home">
          {
            time_line_data.map((item, index) => {
              return <RecordTimeItem {...item} key={item.record_id} up={index !== 0} />;
            })
          }
        </div>
      </div>
    );
  }
}

export default connect(state => state.record)(RecordTimeLine);
