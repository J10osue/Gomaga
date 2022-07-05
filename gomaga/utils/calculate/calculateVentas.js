const calculateTotal = (cantidad, precio) => {
     return cantidad * precio;
}

const calculateIva = (total) => {
     const iva = 0.16;
     return total * iva;
}

module.exports = {calculateIva, calculateTotal}
