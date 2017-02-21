import React, { Component, PropTypes } from 'react';
import { ClassNamesPropType } from 'aesthetic';
import styler from 'styles/styler';


const {bool, node} = PropTypes;
class Container extends Component {
    static propTypes = {
        classNames: ClassNamesPropType,
        children: node,
        fluid: bool
    };
    render(){
        const { fluid, children, classNames } = this.props;

        return (
            <div className={fluid ? `${classNames.container} fluid` : classNames.container}>
            {children}
            </div>
        );
    }
}

export const constructStylesFromTheme = ({grid}) =>
    grid.containers.reduce((previouse, current) => (
        Object.assign({}, previouse, {
            [ `@media (${ current.min })` ]: {
                container: {
                    width: current.width,
                    '&.fluid': {
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }
                }
            }
        })
    ), {});

export default styler((theme) => (constructStylesFromTheme(theme)))(Container);