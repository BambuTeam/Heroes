import React, {useState, useEffect} from 'react';
import {Container, Col, Row} from 'react-bootstrap'
import axios from 'axios';





function Card(){


    const [superheroes, setSuperheroes]=useState([])

    useEffect(()=>{

        const url="https://akabab.github.io/superhero-api/api/all.json"
        axios.get(url)
        .then((res)=>{
            const data = res.data;
            setSuperheroes(data)
        })
        console.log(superheroes)
    },[])

    return(
    <Container >
    <Row>
    {
        superheroes.map((item,i)=>(
           
        <Col lg="3"  className="Card_Container">   
        <img src ={item.images.lg} alt="LikedCard"/>
        <h1>{item.name}</h1>
        <p>{item.biography.fullName}</p>
        <p>{item.appearance.race}</p>

        
    </Col>
        ))
    }
    
    
    </Row>

  
      </Container>
    )
}



export default (Card);