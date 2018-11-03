export const filterOrdersByStatus = (order, statusFilters) => {
    return statusFilters.options.find(status => status.value === order.status).selected
};

export const filterOrders = (orders, filters) => {
    return orders
        .filter(order => filterOrdersByStatus(order, filters.statusFilters))
};
