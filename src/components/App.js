require('normalize.css');
require('styles/App.css');

import React, { Component, PropTypes } from 'react'
import ImgRow from './ImgRow';
import config from 'config'

class App extends Component {
  imgUrlx2(img) {
    return config.sourceUrl + img + App.defaultProps.x2;
  }
  render() {
    const { select, imgSelected, source } = this.props

    return (
      <div className="index">
        {
          source.map(img =>
              <ImgRow key={img} Img={img} handleClick={() => select(img)} />
          )
        }
        <div className="notice">
          <img src={this.imgUrlx2(imgSelected)} />
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
