import React, { Component } from 'react';
import { connect } from 'dva';

import LogItem from './LogItem';

class RecordLog extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'log/getLogList' });
  }

  render() {
    return (
      <div>
        {
          this.props.log_list.map((item, index) => {
            return (
              <LogItem
                first={index === 0}
                key={item.date}
                log_date={item.date}
                log_oil={item.oil}
                record={item.record}
                count={item.record.length}
              />
            );
          })
        }
      </div>
    );
  }
}

export default connect(state => state.log)(RecordLog);
