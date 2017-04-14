import React from 'react';
import {node} from 'prop-types';
import Row from 'components/Row';
import Container from 'components/Container';
import Column from 'components/Column';
import Hidden from 'components/Hidden';

const Presentation = ({children}) =>
    <div>
        <Container className={'Container-test'}>
            <Row className={'Row-test'}>
                <Hidden className={'Hidden-test'} md={'exact'}>{'Hidden-test'}</Hidden>
                {'Row-Hidden-test'}
            </Row>
            {children}
            <Row className={'Row-test'}>
                <Column className={'Column-test'} xs={1} lg={6} lgOffset={6}>{'Row-Column-test'}</Column>
            </Row>
        </Container>
    </div>;
Presentation.propTypes = {
    children: node
};

export default Presentation;