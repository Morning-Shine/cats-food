import React from 'react';
import styled from '@emotion/styled';
import MainPicture from '../img/main_picture.png';
import { BORDER_RADIUS_PRODUCT_CARD } from '../constants/cssDimentions';



export default function CardPicture({ opacity }) {
    return (
        <Div
            style={{
                opacity: `${opacity}`,
            }}
        ></Div>
    )
}

const Div = styled.div`
    /* border: 1px solid red; */
    left: 0;
    bottom: 0;
    width: 300px;
    height: 267px;
    position: absolute;
    background-image: url(${MainPicture});
    background-position-x: -30px;
    border-bottom-left-radius: ${BORDER_RADIUS_PRODUCT_CARD}px;
`