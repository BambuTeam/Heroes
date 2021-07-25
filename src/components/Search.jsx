import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'


var Search=()=>{

    return(
        <Container className="Container-Search">
        <Row>
    <Col lg="8" >   
    <h2>All superheroes</h2>
    </Col>
    <Col lg="4">
        <div className="glass">
        
       <i className="Seach-ico"></i> <label for="gsearch"><input type="text" placeholder=" Search..." /></label>
        </div>
    </Col>
  </Row>
      </Container>
    )
}



export default (Search);