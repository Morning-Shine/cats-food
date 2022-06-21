import React from 'react';
import styled from '@emotion/styled';
import { SIDE_MARGIN } from '../constants/cssDimentions';
import { TEXT_COLOR_MAIN } from '../constants/cssColors';


export default function Header({ name }) {
    return (
        <HeaderCont>{name}</HeaderCont>
    )
}

const HeaderCont = styled.header`
    z-index: 10;
    position: relative;
    color: ${TEXT_COLOR_MAIN};
    font-size: 36px;
    line-height: 44px;
    text-align: center;
    text-shadow: 0px 1px 1px #000000;
    margin: 36px ${SIDE_MARGIN}px 25px;
`