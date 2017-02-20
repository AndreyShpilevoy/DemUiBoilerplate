import React, {PropTypes} from 'react';
import Label from 'components/Label';
import Row from 'components/Row';
import Container from 'components/Container';

const Presentation = ({children}) => (
    <div>
        <Row>
            <Container>{ 'default test' }</Container>
        </Row>
        {children}
        <Row>
            <Label>{ 'default test' }</Label>
            <span>{'ok'}</span>
        </Row>
    </div>
);
Presentation.propTypes = {
    children: PropTypes.node
};

export default Presentation;