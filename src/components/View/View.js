import React, { Component } from 'react';
import './View.css';

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { history } = this.props;
    const { goBack } = history;
    return (
      <div>
        <p>An Example app view.</p>
        <div>
          <button onClick={goBack}>Go Back</button>
        </div>
      </div>
    );
  }
}

export default View;
