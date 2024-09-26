function triangle(a, b, c) {
    if(Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
        return 'Tipo de dato incorrecto';
    }
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        return 'Tipo de dato incorrecto';
    }
    if (a <= 0 || b <= 0 || c <= 0) {
        return 'Tipo de dato incorrecto';
    }
    if (a + b <= c || a + c <= b || b + c <= a) {
        return  'No es un triangulo';
    }
    if (a === b && b === c) {
        return 'Equilatero';
    } else if (a === b || b === c || a === c) {
        return 'Isosceles';
    } else {
        return 'Escaleno';
    }
}

module.exports = { triangle };