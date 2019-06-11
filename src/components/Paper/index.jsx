import React from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Paper } from '@material-ui/core';

// Component styles
const styles = theme => {
  return {
    root: {
      borderRadius: '4px'
    },
    squared: {
      borderRadius: 0
    },
    outlined: {
      boxShadow: '0 2px 5px 0 rgba(0,0,0,.2)'
    }
  };
};

const CustomPaper = props => {
  const { classes, className, outlined, squared, children, ...rest } = props;

  const rootClassName = classNames(
    {
      [classes.root]: true,
      [classes.squared]: squared,
      [classes.outlined]: outlined
    },
    className
  );

  return (
    <Paper
      {...rest}
      className={rootClassName}
    >
      {children}
    </Paper>
  );
};

CustomPaper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  elevation: PropTypes.number,
  outlined: PropTypes.bool,
  squared: PropTypes.bool
};

CustomPaper.defaultProps = {
  squared: false,
  outlined: true,
  elevation: 0
};

export default withStyles(styles)(CustomPaper);
