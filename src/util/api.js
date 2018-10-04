export const fullOrderProps = [
    'id',
    'fullFrom',
    'fullTo',
    'status',
    'weight',
    'worth',
    'description',
    'birthDate',
];

export const filterFullOrderProps = (orderProps) => {
    return Object.keys(orderProps)
        .filter(orderProp => {
            return fullOrderProps.includes(orderProp)
        })
        .map(orderProp => {
            return {label: orderProp, value: orderProps[orderProp]}
        })
};