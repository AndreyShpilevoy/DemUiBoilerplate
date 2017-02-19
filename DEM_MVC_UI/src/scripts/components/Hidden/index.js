import React, { PropTypes } from 'react';
import { ClassNamesPropType } from 'aesthetic';
import styler from 'styles/styler';


const Hidden = ({ xs, sm, md, lg, xl, children, classNames }) => {
  return (
    <div className={`${classNames['hidden-up-xl']} ${classNames['hidden-up-md']} `}>
      {children}
    </div>
  );
};

Hidden.propTypes = {
    classNames: ClassNamesPropType,
    children: PropTypes.node,
    xs: PropTypes.string,
    sm: PropTypes.string,
    md: PropTypes.string,
    lg: PropTypes.string,
    xl: PropTypes.string
};

const constructStylesFromTheme = ({grid}) => {
    let result = {};
    for(const container of grid.containers){
        let containerStyle = {
            [`@media (${container.min})`]: {
                [`hidden-up-${container.size}`]:{
                    display: 'none'
                }
            }
        };
        result = Object.assign({}, result, containerStyle);
    }
    return result;
};

export default styler((theme) => (constructStylesFromTheme(theme)))(Hidden);