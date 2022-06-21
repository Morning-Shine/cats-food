import React, { useState } from 'react';
import CardInfofmation from './CardInfofmation';
import BuyFeedLink from './BuyFeedLink';
import {
    TASTE_CHIKEN,
    TASTE_FOIE_GRAS,
    TASTE_FISH,
    DESCRIPTION_CHIKEN,
    DESCRIPTION_FOIE_GRAS,
    DESCRIPTION_FISH
} from '../constants/productsForCats';
import {
    TEXT_COLOR_MAIN,
    DEFAULT_COLOR,
    DEFAULT_HOVER_COLOR,
    SELECTED_COLOR,
    SELECTED_HOVER_COLOR,
    DISABLED_COLOR,
    TEXT_COLOR_ENDED
} from '../constants/cssColors';
import { BORDER_RADIUS_PRODUCT_CARD } from '../constants/cssDimentions';
import styled from '@emotion/styled';


export default function Card({ taste, weight, inStock, isLastAlone }) {
    const [isInBasket, setIsInBasket] = useState(false);
    const [isMouseOver, setIsMouseOver] = useState(false);
    let descr;
    // eslint-disable-next-line default-case
    switch (taste) {
        case TASTE_CHIKEN:
            descr = DESCRIPTION_CHIKEN;
            break;
        case TASTE_FOIE_GRAS:
            descr = DESCRIPTION_FOIE_GRAS;
            break;
        case TASTE_FISH:
            descr = DESCRIPTION_FISH;
            break;
    }

    let backColor;
    // eslint-disable-next-line default-case
    switch (true) {
        case !inStock:
            backColor = DISABLED_COLOR;
            break;
        case inStock && !isInBasket:
            backColor = DEFAULT_COLOR;
            break;
        case inStock && isInBasket:
            backColor = SELECTED_COLOR;
            break;
    }

    let footerTextColor = TEXT_COLOR_MAIN;
    let cursorForm = 'pointer';
    if (backColor === DISABLED_COLOR) {
        footerTextColor = TEXT_COLOR_ENDED;
        cursorForm = 'not-allowed';
    }
    if (backColor === DEFAULT_COLOR && isMouseOver) {
        // backColor = 'orange';
        backColor = DEFAULT_HOVER_COLOR;
    }

    if (backColor === SELECTED_COLOR && isMouseOver) {
        // backColor = 'violet';
        backColor = SELECTED_HOVER_COLOR;
    }

    const Cont = !isLastAlone ? ContainerOddItems : ContainerEvenItems;

    return (
        <Cont>
            <Border
                onMouseOver={() => setIsMouseOver(false)}
                onMouseOut={() => setIsMouseOver(true)}
                onClick={() => setIsInBasket(prevState => !prevState)}
                style={{
                    background: `linear-gradient(135deg, transparent 5.2%, ${backColor} 5.2%)`,
                    cursor: `${cursorForm}`
                }}
            >
                <CardInfofmation
                    taste={taste}
                    weight={weight}
                    backColor={backColor}
                />
            </Border>
            <CardFooter>
                {inStock
                    ? isInBasket
                        ? <FooterText style={{ color: `${footerTextColor}` }}>
                            {descr}
                        </FooterText>
                        : <BuyFeedLink
                            setIsInBasket={setIsInBasket}
                        />
                    : <FooterText style={{ color: `${footerTextColor}` }}>
                        {`Печалька, ${taste} закончился`}
                    </FooterText>
                }
            </CardFooter>
        </Cont>
    )
}

const ContainerOddItems = styled.div`
    width: 320px;
    height: 509px;
    z-index: 10;
    margin-bottom: 25px;`;

const ContainerEvenItems = styled.div`
    width: 320px;
    height: 509px;
    z-index: 10;
    margin-bottom: 25px;
    @media (max-width: 1150px) {
        grid-column-start: 1;
        grid-column-end: 3;
    }
    @media (max-width: 750px) {
        grid-column-start: auto;
        grid-column-end: auto;
    }`;

const Border = styled.div`
    box-sizing: border-box;
    border-radius: ${BORDER_RADIUS_PRODUCT_CARD}px;
    width: 320px;
    height: 480px;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    `;
const CardFooter = styled.div`
    height: 29px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;
const FooterText = styled.p`
    font-size: 13px;    
    font-family: 'Trebuchet MS';
    font-weight: 400;
`;