import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Glass from '../img/Ico/arrow-up.svg'








const Search=()=>{
    return(
        <Container className="Container-Search">
        <Row>
    <Col lg="8">   
    <h2>All superheroes</h2>
    </Col>
    <Col lg="4">
        <div className="glass">
        <label for="gsearch">Search Google:</label>
        </div>
    </Col>
  </Row>
      </Container>
    )
}



export default (Search);