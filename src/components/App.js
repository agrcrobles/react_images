require('normalize.css');
require('styles/App.css');

import React, { Component, PropTypes } from 'react'
import ImgRow from './ImgRow';
import config from 'config'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: this.props.source[0] };
  }
  imgUrlx2(img) {
    return config.sourceUrl + img + App.defaultProps.x2;
  }
  render() {
    const { dispatch, select, increment, imgSelected, source } = this.props
    console.log(dispatch);
    let self = this;
    return (
      <div className="index">
        {
          source.map(img =>
              <ImgRow key={img} Img={img} handleClick={select} />
          )
        }
        <div className="notice">
          <img src={this.imgUrlx2(this.state.selected)} />
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  x2: "/2x"
};

App.propTypes = {
  select: PropTypes.func.isRequired
}

export default App;
