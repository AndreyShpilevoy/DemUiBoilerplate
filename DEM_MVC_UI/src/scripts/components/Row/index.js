import React, { Component, PropTypes } from 'react';
import { ClassNamesPropType } from 'aesthetic';
import styler from 'styles/styler';


const {bool, node} = PropTypes;
class Row extends Component {
    static propTypes = {
        classNames: ClassNamesPropType,
        children: node,
        reverse: bool
    };
    render() {
        const { reverse, children, classNames } = this.props;
        return (
            <div className={reverse ? `${classNames.row} reverse` : classNames.row}>
                {children}
            </div>
        );
    }
}

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