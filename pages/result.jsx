import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import {
  Container,
  Button,
} from '@material-ui/core';
import { incrementCounter, decrementCounter } from '../redux/actions/counterActions';
import { withHomeLayout } from '../layouts/homeLayout';

const styles = () => ({
  root: {
    flexGrow: 1,
    background: 'white',
  },
});

const propTypes = {
  router: PropTypes.objectOf(PropTypes.any).isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  counter: PropTypes.objectOf(PropTypes.any).isRequired,
};

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  navigateToHomePage = () => {
    const { router } = this.props;
    router.push('/');
  }

  render() {
    const { classes, counter } = this.props;
    return (
      <div className={classes.root}>
        <Container disableGutters spacing={2}>
          Result:
          {' '}
          {counter.value}
          <br />
          <br />
          <Button onClick={this.navigateToHomePage}>Home</Button>
        </Container>
      </div>
    );
  }
}

Result.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

export default withHomeLayout(connect(mapStateToProps, (dispatch) => ({
  actions: bindActionCreators({
    incrementCounter,
    decrementCounter,
  }, dispatch),
}))(withRouter(withStyles(styles)(Result))));
