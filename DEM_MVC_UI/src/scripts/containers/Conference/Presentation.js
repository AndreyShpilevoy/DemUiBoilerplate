import React, {PropTypes} from 'react';
import Label from 'components/Label';
import Row from 'components/Row';
import Hidden from 'components/Hidden';

const Presentation = ({children}) => (
    <div>
        <Row>
            <Hidden>{ 'default test' }</Hidden>
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