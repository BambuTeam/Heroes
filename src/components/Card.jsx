import React, {useState, useEffect} from 'react';
import {Container, Col, Row} from 'react-bootstrap'
import axios from 'axios';
import Heart from '../img/Ico/medium-heart.svg'







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
    <Row>{  
        superheroes.map((item,i)=>(
        <Col lg="3"  >
        <div className="Card_Container bg-blur" >
        <div className="Contai-col " >
           
        
        <Col>
        
        <img src ={item.images.sm} alt="ImgCard"/>
        
        <button className="btn-like"> <img src ={Heart} alt="LikedCard"/> </button>       
        </Col>
        <div>
        <h1>{item.name}</h1>
        <p>Real Name: {item.biography.fullName}</p>
        <p>{item.appearance.race}</p>
        <div className="Fist-ico">
        <span className="ico-svg"></span><p>{item.powerstats.combat}/100</p>
        
        
        </div>
        </div>
        </div>
        </div>
        
    </Col>
        ))
    }
    
    
    </Row>

  
      </Container>
    )
}



export default (Card);