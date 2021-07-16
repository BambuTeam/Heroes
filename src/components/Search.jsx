import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Glass from '../img/Ico/search.svg'



const Search=()=>{
    return(
        <Container className="Container-Search">
        <Row>
    <Col lg="8" >   
    <h2>All superheroes</h2>
    </Col>
    <Col lg="4">
        <div className="glass">
        <img src ={Glass} alt="LikedCard"/>
        <label for="gsearch"><h5>Search</h5></label>
        </div>
    </Col>
  </Row>
      </Container>
    )
}



export default (Search);