import React, { Component } from 'react';
import PropTypes            from 'prop-types';


class componentName extends Component {

  constructor(props){
    super(props);
    this.state = {};

    this.myFunction = _myFunction.bind(this);
  }

  componentWillMount() {
    // invoked once.
    // fires before initial 'render'
  }

  componentDidMount() {
    // good for AJAX: fetch, ajax, or subscriptions.

    // invoked once (client-side only).
    // fires before initial 'render'
  }

  componentWillReceiveProps(nextProps) {
    // invoked every time component is recieves new props.
    // does not before initial 'render'
  }

  shouldComponentUpdate(nextProps, nextState) {
    // invoked before every update (new props or state).
    // does not fire before initial 'render'.
  }

  componentWillUpdate(nextProps, nextState) {
    // invoked immediately before update (new props or state).
    // does not fire before initial 'render'.

    // (see componentWillReceiveProps if you need to call setState)
    // ****no setState*****
  }

  componentDidUpdate(prevProps, prevState) {
    // invoked immediately after DOM updates
    // does not fire after initial 'render'
  }

  render(){

    return (
      <div>

      </div>
    )
  }

  componentWillUnmount() {
    // invoked immediately before a component is unmounted.
  }


}


export default componentName;


componentName.propTypes = {
  // optionalArray      : PropTypes.array.isRequired,
  // optionalBool       : PropTypes.bool,
  // optionalFunc       : PropTypes.func,
  // optionalNumber     : PropTypes.number,
  // optionalObject     : PropTypes.object,
  // optionalString     : PropTypes.string,
  // optionalSymbol     : PropTypes.symbol,
  // optionalValidation : PropTypes.oneOf(['this', 'that'])
};


function _myFunction() {
  // private function
};
