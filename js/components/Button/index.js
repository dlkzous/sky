import React from 'react';
import { withRouter } from 'react-router';

/**
 * Class representing a generic button component
 */
class Button extends React.Component {
  /**
   * Constructor for the class that binds the onClick method
   * @function constructor
   * @param {object} props - React component props
   * @author Kushal D'Souza
   * @memberOf Button
   */
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    // Push to either a given path or the index route
    const { router, to } = this.props;
    const path = to || '/';
    router.push(path);
  }
  render() {
    const { text } = this.props;
    return (
      <a className="waves-effect waves-light btn" onClick={this.onClick} >
        {text}
      </a>
    );
  }
}

Button.propTypes = {
  router: React.PropTypes.object.isRequired,
  text: React.PropTypes.string.isRequired,
  to: React.PropTypes.string
};

export default withRouter(Button);
