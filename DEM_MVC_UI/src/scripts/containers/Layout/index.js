import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
//import * as localeActions from 'actions/localeActions';
import Presentation from './Presentation';


class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    //actions: PropTypes.object.isRequired
  };

  componentDidMount() {
    //this.props.actions.getLocale();
  }

  render(){
    return(
      <Presentation
        children={this.props.children}
        theme={'default'}/>
    );
  }
}

export default connect()(Layout);
