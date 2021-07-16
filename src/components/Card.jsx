import React from 'react';
import {Container, Col, Row} from 'react-bootstrap'




const Card=()=>{
    return(
    <Container >
    <Row>
    <Col lg="3"  className="Card_Container">   
        <img src ={"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg"} alt="LikedCard"/>
        <h1>Tarjetita</h1>
    </Col>
    <Col></Col>
    </Row>

  
      </Container>
    )
}



export default (Card);