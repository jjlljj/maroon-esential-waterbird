import React, { Component } from 'react';
import { connect } from 'react-redux';
import './View.css';

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { history, exampleState, } = this.props;
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

const mapStateToProps = ({ exampleState }) => ({
  exampleState,
})

export default connect(mapStateToProps)(View);
