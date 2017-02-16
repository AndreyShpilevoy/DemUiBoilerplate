import React, {PropTypes} from 'react';
import Label from 'components/Label';

const Presentation = ({children}) => (
    <div>
        <span>{'Conference'}</span>
        <Label>{ 'default test' }</Label>
        {children}
    </div>
);
Presentation.propTypes = {
    children: PropTypes.node
};

export default Presentation;