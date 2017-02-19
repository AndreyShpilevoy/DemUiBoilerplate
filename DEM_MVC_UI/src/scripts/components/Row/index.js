import React, { PropTypes } from 'react';
import { ClassNamesPropType } from 'aesthetic';
import styler from 'styles/styler';


const Row = ({ children, classNames }) => {
  return (
    <div className={classNames.row}>
      {children}
    </div>
  );
};

Row.propTypes = {
    classNames: ClassNamesPropType,
    children: PropTypes.node
};

export default styler(() => ({
  row: {
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flex: 'initial',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
}))(Row);