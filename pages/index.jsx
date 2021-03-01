import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import {
  Container,
  Button,
  TextField,
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
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
};

class Index extends Component {
  constructor(props) {
    super(props);
  }

  navigateToResultPage = () => {
    const { router } = this.props;
    router.push('/result');
  }

  render() {
    const { classes, counter, actions } = this.props;
    return (
      <div className={classes.root}>
        <Container className={classes.container} disableGutters spacing={2}>
          <Button onClick={actions.incrementCounter}>+</Button>
          <TextField label="Count" value={counter.value} />
          <Button onClick={actions.decrementCounter}>-</Button>

          <br />
          <br />
          <Button onClick={this.navigateToResultPage}>Result</Button>
        </Container>
      </div>
    );
  }
}

Index.propTypes = propTypes;

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
}))(withRouter(withStyles(styles)(Index))));
