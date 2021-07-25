import React, { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Heart from '../img/Ico/medium-heart.svg'
import Arrow from '../img/Ico/arrow-up.svg'





function LikedCard(){

    var [isOpen, setIsOpen] = useState(false);


    return(
        <Container className="Container-like">
        <Row>
    <Col>
    <img src ={Heart} alt="LikedCard"/>
    <h2>Liked</h2>
    </Col>
    <Col className="Dropdow-arrow">
    <button onClick={() => setIsOpen(!isOpen)}>
    <img src ={Arrow} alt="LikedCard"/></button>
    {isOpen && <div className="Container-like"> ESTO ESTABA OCULTO</div>}
    </Col>
  </Row>
      </Container>
    )
}



export default (LikedCard);