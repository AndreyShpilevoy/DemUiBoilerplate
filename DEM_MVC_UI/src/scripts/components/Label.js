import React, { PropTypes } from 'react';
import { ClassNamesPropType } from 'aesthetic';
import styler from 'styles/styler';

function Label({ children, classNames }) {
  return (
    <span className={classNames.span}>
      {children}
    </span>
  );
}

Label.propTypes = {
  children: PropTypes.node,
  classNames: ClassNamesPropType
};

export default styler((theme) => ({
  span: {
    color: theme.color,
    height: theme.height
  },
}))(Label);