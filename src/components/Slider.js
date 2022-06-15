import React from 'react';
import styled from "styled-components";





const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 10px;`    

export default function Slider() {
  return (
    <Container>
        <Arrow>
            s
         
        </Arrow>
    </Container>
  )
}
