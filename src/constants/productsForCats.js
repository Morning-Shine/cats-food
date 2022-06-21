export const FEED_MAIN_LINE = {
    name: 'Нямушка',
    description: 'Сказочное заморское яство'
};

export const GIFT_SMALL = 'мышь';
export const GIFT_MEDIUM = '2 мыши';
export const GIFT_LARGE = '5 мышей';

export const TASTE_CHIKEN = 'с курой';
export const TASTE_FOIE_GRAS = 'с фуа-гра';
export const TASTE_FISH = 'с рыбой';

export const DESCRIPTION_CHIKEN = 'Филе из цыплят с трюфелями в бульоне.';
export const DESCRIPTION_FOIE_GRAS = 'Печень утки разварная с артишоками.';
export const DESCRIPTION_FISH = 'Головы щучьи с чесноком да свежайшая сёмгушка.';

export const FEED_RANGE = [
    {
        vendorCode: '001',
        taste: TASTE_FOIE_GRAS,
        weight: 0.5,
        inStock: false,
    },
    {
        vendorCode: '002',
        taste: TASTE_FOIE_GRAS,
        weight: 2,
        inStock: true,
    },
    {
        vendorCode: '003',
        taste: TASTE_FOIE_GRAS,
        weight: 5,
        inStock: true,
    },
    {
        vendorCode: '004',
        taste: TASTE_FISH,
        weight: 0.5,
        inStock: true,
    },
    {
        vendorCode: '005',
        taste: TASTE_FISH,
        weight: 2,
        inStock: false,
    },
    {
        vendorCode: '006',
        taste: TASTE_FISH,
        weight: 5,
        inStock: true,
    },
    {
        vendorCode: '007',
        taste: TASTE_CHIKEN,
        weight: 0.5,
        inStock: true,
    },
    {
        vendorCode: '008',
        taste: TASTE_CHIKEN,
        weight: 2,
        inStock: true,
    },
    {
        vendorCode: '009',
        taste: TASTE_CHIKEN,
        weight: 5,
        inStock: false,
    },
];

