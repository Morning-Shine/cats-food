import React from 'react';
import styled from '@emotion/styled';
import { TEXT_COLOR_MAIN } from '../constants/cssColors';



export default function WeightLabel({ weight, backColor }) {
    const formattedValue = weight.toString().replace('.', ',');
    return (
        <Label
            style={{ backgroundColor: `${backColor}` }}
        >
            <WeightValue>{formattedValue}</WeightValue>
            <Weight>кг</Weight>
        </Label>
    )
}

const Label = styled.div`
    width: 80px;
    height: 80px;
    position: absolute;
    right: 12px;
    bottom: 12px;
    border-radius: 50%;
    display: flex;
flex-direction: column;
    align-items: center;
    font-family: 'Trebuchet MS';
    justify-content: center;
`;

const WeightValue = styled.p`
    /* border: 1px solid red; */
    color: ${TEXT_COLOR_MAIN};
    font-size: 42px;
    line-height: 35px;
    padding-top: 15px;
`;

const Weight = styled.p`
    /* border: 1px solid red; */
    color: ${TEXT_COLOR_MAIN};
    font-size: 21px;
    line-height: 22px;
    padding-bottom: 10px;
`