import React, {PropTypes} from 'react';
import { ThemeProvider } from 'aesthetic';

const Presentation = ({children, theme}) => (
    <ThemeProvider name={theme}>
        {children}
    </ThemeProvider>
);

const {node, string} = PropTypes;
Presentation.propTypes = {
    children: node,
    theme: string
};

export default Presentation;