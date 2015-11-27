import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import App from '../components/App'
import * as ImgActions from '../actions/img'
function mapStateToProps(state) {
  console.log(state);
  return {
    source: state.imgs,
    imgSelected: state.imgSelected
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ImgActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
