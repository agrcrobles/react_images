require('normalize.css');
require('styles/App.css');

import React from 'react';
import ImgRow from './ImgRow';
import config from 'config'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: this.props.source[0] };
  }
  imgUrlx2(img) {
    return config.sourceUrl + img + App.defaultProps.x2;
  }
  handleClick(img) {
    this.setState({selected: img});
  }
  render() {
    let self = this;
    return (
      <div className="index">
        {
          this.props.source.map(img =>
              <ImgRow key={img} Img={img} handleClick={self.handleClick.bind(self, img)} />
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

export default App;
