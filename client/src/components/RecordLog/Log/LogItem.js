import React, { Component } from 'react';
import { List, Flex, WhiteSpace } from 'antd-mobile';
import { connect } from 'dva';
import RecordTimeItem from '../../RecordTimeLine/RecordTimeItem';
import './style.less';

class LogItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      moreState: props.first,
    };
  }

  expertClick = () => {
    this.setState({ moreState: !this.state.moreState });
  }

  recordListRender = () => {
    return (
      <div className="time-line-item-group">
        {
          this.props.record.map((item, index) => {
            return <RecordTimeItem {...item} key={item.record_id} up={index !== 0} />;
          })
        }
      </div>
    );
  }

  render() {
    return (
      <div>
        <List>
          <List.Item onClick={this.expertClick} arrow={this.state.moreState ? 'down' : 'horizontal'}>
            <Flex>
              <Flex.Item><span className="log-item-content">{this.props.log_date}</span></Flex.Item>
              <Flex.Item><span className="log-item-content"><strong>油费:</strong>{this.props.log_oil}</span></Flex.Item>
              <Flex.Item><span className="log-item-content"><strong>运输</strong>{this.props.count}<strong>趟</strong></span></Flex.Item>
            </Flex>
          </List.Item>
          {
            this.state.moreState && this.recordListRender()
          }
        </List>
        <WhiteSpace />
      </div>
    );
  }
}

export default connect(state => state.record)(LogItem);
