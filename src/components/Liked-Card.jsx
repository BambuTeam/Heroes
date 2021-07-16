import React, { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Heart from '../img/Ico/medium-heart.svg'
import Arrow from '../img/Ico/arrow-up.svg'





const LikedCard=()=>{
    return(
        <Container className="Container-like">
        <Row>
    <Col>
    <img src ={Heart} alt="LikedCard"/>
    <h2>Liked</h2>
    </Col>
    <Col className="Dropdow-arrow">
    <img src ={Arrow} alt="LikedCard"/>
    </Col>
  </Row>
      </Container>
    )
}



export default (LikedCard);