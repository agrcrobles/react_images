import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import App from '../components/App'
import * as ImgActions from '../actions/img'

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ImgActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
