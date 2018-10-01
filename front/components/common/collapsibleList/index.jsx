import React from 'react';
import PropTypes from 'prop-types';

import Item from './item';
import './style';
import testArr from './text';

export default class CollapsibleList extends React.PureComponent {
  static propTypes = {
    list: PropTypes.array,
  };

  state = {
    openId: '',
  };

  toggle = id => this.setState({openId: id !== this.state.openId ? id : ''});

  render() {
    const {openId} = this.state;
    const {list} = this.props;

    return (
      <div className={'list'}>
        {list.length ? (list.map(item => (
          <Item
            key={item.parent.id}
            data={item}
            toggle={this.toggle}
            openId={openId}
            />
        ))) : null}
      </div>
    );
  }
}

CollapsibleList.propTypes = {
  list: PropTypes.array,
};
