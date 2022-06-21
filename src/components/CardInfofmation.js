import React from 'react';
import styled from '@emotion/styled';
import CardPicture from './CardPicture';
import WeightLabel from './WeightLabel';
import {
    FEED_MAIN_LINE,
    GIFT_LARGE,
    GIFT_MEDIUM,
    GIFT_SMALL
} from '../constants/productsForCats';
import {
    SELECTED_HOVER_COLOR,
    TEXT_COLOR_SECONDARY,
    TEXT_COLOR_DESCRIPTION,
    DISABLED_COLOR
} from '../constants/cssColors';
import { MESSAGE_SELECTED_HOVER } from '../constants/textContent';
import { BORDER_RADIUS_PRODUCT_CARD } from '../constants/cssDimentions';


export default function CardInfofmation({ taste, weight, backColor }) {
    let gift;
    // eslint-disable-next-line default-case
    switch (weight) {
        case 0.5:
            gift = GIFT_SMALL;
            break;
        case 2:
            gift = GIFT_MEDIUM;
            break;
        case 5:
            gift = GIFT_LARGE;
            break;
    }
    let opacity = 1;
    let nameInfoTextColor = TEXT_COLOR_SECONDARY;
    let addInfoTextColor = TEXT_COLOR_DESCRIPTION;
    if (backColor === DISABLED_COLOR) {
        opacity = 0.5;
        nameInfoTextColor = DISABLED_COLOR;
        nameInfoTextColor = DISABLED_COLOR;
    }
    return (
        <CardInfo>
            {/* {backColor !== 'violet' */}
            {backColor !== SELECTED_HOVER_COLOR
                ? (<Decr
                    style={{ color: `${addInfoTextColor}`, opacity: `${opacity}` }}
                >
                    {FEED_MAIN_LINE.description}
                </Decr>)
                : (<Decr
                    style={{ color: `${backColor}` }}
                >
                    {MESSAGE_SELECTED_HOVER}
                </Decr>)
            }
            <Name
                style={{ color: `${nameInfoTextColor}`, opacity: `${opacity}` }}
            >
                {FEED_MAIN_LINE.name}
            </Name>
            <Taste
                style={{ color: `${nameInfoTextColor}`, opacity: `${opacity}` }}
            >
                {taste}
            </Taste>
            <AddInfo
                style={{ color: `${addInfoTextColor}`, opacity: `${opacity}` }}
            >
                {weight * 1000 / 50} порций
            </AddInfo>
            <AddInfo
                style={{ color: `${addInfoTextColor}`, opacity: `${opacity}` }}
            >
                {gift} в подарок
            </AddInfo>
            <CardPicture opacity={opacity} />
            <WeightLabel weight={weight} backColor={backColor} />
        </CardInfo>
    )
}

const CardInfo = styled.div`
    position: relative;    
    border-radius: ${BORDER_RADIUS_PRODUCT_CARD}px;
    background: linear-gradient(135deg, transparent 5%, #f2f2f2 5%);
    width: 312px;
    height: 472px;
    text-align: left;
`
const Decr = styled.p`
    line-height: 19px;
    font-family: 'Trebuchet MS';
    font-size: 16px;
    padding-top: 17px;
    padding-left: 47px;
`
// const DontApp
const Name = styled.h2`
    padding-top: 5px;
    padding-left: 44px;
    line-height: 56px;
    font-family: 'Trebuchet MS';
    font-size: 48px;
`
const Taste = styled.h3`
    font-family: 'Trebuchet MS';
    padding-left: 47px;
    font-size: 24px;
    padding-bottom: 15px;
`
const AddInfo = styled.p`
    line-height: 16px;
    font-family: 'Trebuchet MS';
    font-size: 14px;
    padding-left: 47px;
`;