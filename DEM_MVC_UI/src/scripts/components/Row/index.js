import React, { PropTypes } from 'react';
import { ClassNamesPropType } from 'aesthetic';
import styler from 'styles/styler';

const constructClassNameString = (reverse, className, classNames) => {
    let result = reverse ? `${classNames.row} reverse` : classNames.row;
    result = className ? `${result} ${className}` : result;
    return result;
};

const Row = ({ reverse, children, className, classNames }) =>
    <div className={constructClassNameString(reverse, className, classNames)}>
        {children}
    </div>;

const {bool, node, string} = PropTypes;
Row.propTypes = {
    className: string,
    classNames: ClassNamesPropType,
    children: node,
    reverse: bool
};

export default styler(() => ({
    row: {
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flex: 'initial',
        flexDirection: 'row',
        flexWrap: 'wrap',
        '&.reverse': {
            flexDirection: 'row-reverse'
        }
    }
}))(Row);