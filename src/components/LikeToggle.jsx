import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Heart from '../img/Ico/medium-heart.svg';


export default class LikeToggle extends Component {

    state ={
        on: false,
    }

    toggle =  () =>{
        this.setState({
            on: !this.state.on
        })
    }

    render() {
        return (
            <Container className="container-toggle">
            <div  className="empty">
            {this.state.on && <div >
            <img src ={Heart} alt="LikedCard"/>    
            <h1>You haven’t liked any superhero yet</h1>
            
            
            </div>}
            
            <button onClick={this.toggle}><i className="ico-arrow"></i></button>
            </div>
            </Container>

        )
    }
}
