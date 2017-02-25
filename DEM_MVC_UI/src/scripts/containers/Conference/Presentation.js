import React, { PropTypes } from 'react';
import Row from 'components/Row';
import Container from 'components/Container';
import Column from 'components/Column';
import Hidden from 'components/Hidden';

const Presentation = ({children}) => (
    <div>
        <Row className={'Row-test'}>
            <Hidden className={'Hidden-test'} md={'exact'}>{'default test'}</Hidden>
            <Container className={'Container-test'}>{'default test'}</Container>
        </Row>
        {children}
        <Row className={'Row-test'}>
            <Column className={'Column-test'} xs={1} lg={6} lgOffset={6}>{'ok'}</Column>
        </Row>
    </div>
);
Presentation.propTypes = {
    children: PropTypes.node
};

export default Presentation;