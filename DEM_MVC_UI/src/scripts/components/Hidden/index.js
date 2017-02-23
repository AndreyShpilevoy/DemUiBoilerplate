import React, { PropTypes } from 'react';
import { ClassNamesPropType } from 'aesthetic';
import styler from 'styles/styler';

export const constructClassNames = (sizesArray, classNames) =>
    sizesArray.filter(size => size.direction === 'up' || size.direction === 'down' || size.direction === 'exact')
        .map((size) => `hidden-${ size.direction }-${ size.name }`)
        .reduce((previouse, current) => `${ previouse } ${ classNames[ current ] }`, '');

const Hidden = ({ xs, sm, md, lg, xl, children, classNames }) => {
    const classes = constructClassNames([
        { name: 'xs', direction: xs },
        { name: 'sm', direction: sm },
        { name: 'md', direction: md },
        { name: 'lg', direction: lg },
        { name: 'xl', direction: xl }], classNames);

    return (
        <div className={classes}>
            {children}
        </div>
    );
};

const {node, string} = PropTypes;
Hidden.propTypes = {
    classNames: ClassNamesPropType,
    children: node,
    xs: string,
    sm: string,
    md: string,
    lg: string,
    xl: string
};

export const constructStylesFromTheme = ({grid}) =>
    grid.containers.reduce((previouse, current) => (
        Object.assign({}, previouse, {
            [ `@media (${ current.min })` ]: { [ `hidden-up-${ current.size }` ]: { display: 'none' } },
            [ `@media (${ current.max })` ]: { [ `hidden-down-${ current.size }` ]: { display: 'none' } },
            [ `@media (${ current.min }) and (${ current.max })` ]: { [ `hidden-exact-${ current.size }` ]: { display: 'none' } }
        })
    ), {});

export default styler((theme) => (constructStylesFromTheme(theme)))(Hidden);