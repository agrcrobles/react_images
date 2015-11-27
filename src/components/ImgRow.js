import React from 'react';
import config from 'config';

class ImgRow extends React.Component {
  constructor(props) {
    super(props);
  }
  imgUrlx1(img) {
    return config.sourceUrl + img + ImgRow.defaultProps.x1;
  }
  render() {
    return (
      <img onClick={this.props.handleClick} src={this.imgUrlx1(this.props.Img)} alt={this.props.Img} />
    )
  }
}
ImgRow.defaultProps = {
  x1: "/1x"
};
export default ImgRow;
