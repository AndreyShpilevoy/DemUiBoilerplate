import React from 'react';
import {node, string} from 'prop-types';
import {ThemeProvider} from 'aesthetic';
import Notification from 'containers/Notification';

const Presentation = ({children, theme}) =>
    <div>
        <ThemeProvider name={theme}>
            {children}
        </ThemeProvider>
        <Notification/>
    </div>;

Presentation.propTypes = {
    children: node,
    theme: string
};

export default Presentation;