import React, { PropTypes } from 'react';
import { ClassNamesPropType } from 'aesthetic';
import styler from 'styles/styler';


const Container = ({ fluid, children, classNames }) => {
  return (
    <div className={fluid ? `${classNames.container} fluid` : classNames.container}>
      {children}
    </div>
  );
};

const {bool, node} = PropTypes;
Container.propTypes = {
    classNames: ClassNamesPropType,
    children: node,
    fluid: bool
};

export const constructStylesFromTheme = ({grid}) =>
    grid.containers.reduce((previouse, current) => (
        {
            [ `@media (${ current.min })` ]: {
                container: {
                    width: current.width,
                        '&.fluid': {
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }
                }
            }
        }
    ), {});

export default styler((theme) => (constructStylesFromTheme(theme)))(Container);