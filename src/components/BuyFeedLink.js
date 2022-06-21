import React from 'react';
import { MESSAGE_FOR_BUY } from '../constants/textContent';
import styled from '@emotion/styled';
import { DEFAULT_COLOR, TEXT_COLOR_MAIN } from '../constants/cssColors';



export default function BuyFeedLink({ setIsInBasket }) {
    return (
        <Cont>
            <Msg>
                {MESSAGE_FOR_BUY} <Link
                    onClick={() => setIsInBasket(true)}
                >купи</Link><Point>.</Point>
            </Msg>
        </Cont>
    )
}

const Cont = styled.div`
    display: flex;
    flex-direction: row;
`
const Msg = styled.p`
    font-size: 13px;    
    font-family: 'Trebuchet MS';
    font-weight: 400;
    color: ${TEXT_COLOR_MAIN};
`;
const Link = styled.span`
    border-bottom: dashed ${DEFAULT_COLOR} 1.5px;
    font-weight: bold;
    color: ${DEFAULT_COLOR};
    cursor: pointer;
`
const Point = styled.span`
    color: ${DEFAULT_COLOR};
`;
