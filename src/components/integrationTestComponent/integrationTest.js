const add = (x, y) => x + y;

const totalAmount = (shippingCost, subTotal) => {
    return '$' + add(shippingCost, subTotal);
};

module.exports = {
    add,
    totalAmount
};