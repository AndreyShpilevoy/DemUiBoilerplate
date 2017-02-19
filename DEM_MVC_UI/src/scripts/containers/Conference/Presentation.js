import React, {PropTypes} from 'react';
import Label from 'components/Label';
import Row from 'components/Row';

const Presentation = ({children}) => (
    <div>
        <Row>
            <Label>{ 'default test' }</Label>
        </Row>
        {children}
        <Row>
            <Label>{ 'default test' }</Label>
        </Row>
    </div>
);
Presentation.propTypes = {
    children: PropTypes.node
};

export default Presentation;