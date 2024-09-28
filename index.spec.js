const { triangle } = require( "./index.js");

describe("Triangulo - Pruebas por valores limites", () => {

    // Tipos de datos correctos
    it("'Triángulo equilátero - Todos los lados iguales'", () => {
        expect(triangle(3, 3, 3)).toBe("Equilatero");
    });

        it("Triangulo Escaleno - Todos los lados diferentes", () => {
        expect(triangle(3, 4, 5)).toBe("Escaleno");
    });

    it("Triangulo Isosceles - Dos lados iguales", () => {
        expect(triangle(3, 3, 5)).toBe("Isosceles");
    });

    it("Triangulo Isosceles - Dos lados iguales", () => {
        expect(triangle(3, 5, 3)).toBe("Isosceles");
    });

    it("Triangulo Isosceles - Dos lados iguales", () => {
        expect(triangle(5, 3, 3)).toBe("Isosceles");
    });
    
    // Tipos de datos correctos pero no es un triangulo
    it("No es un triángulo - Suma de dos lados igual al tercero", () => {
        expect(triangle(3, 3, 6)).toBe("No es un triangulo");
    });

    // Tipo de datos incorrectos con letras
    it("Tipo de dato incorrecto - letras", () => {
        expect(triangle("a", 4, 5)).toBe("Tipo de dato incorrecto");
    }
    );
    it("Tipo de dato incorrecto - letras", () => {
        expect(triangle(4, "a", 5)).toBe("Tipo de dato incorrecto");
    }
    );

    it("Tipo de dato incorrecto - letras", () => {
        expect(triangle(4, 5, "a")).toBe("Tipo de dato incorrecto");
    }
    );

    // Tipo de datos incorrectos con valores <= 0
    it("Tipo de dato incorrecto - valores <= 0", () => {
        expect(triangle(0, 4, 5)).toBe("Tipo de dato incorrecto");
    }
    );
    it("Tipo de dato incorrecto - valores <= 0", () => {
        expect(triangle(4, 0, 5)).toBe("Tipo de dato incorrecto");
    }
    );

    it("Tipo de dato incorrecto - valores <= 0", () => {
        expect(triangle(4, 5, 0)).toBe("Tipo de dato incorrecto");
    }
    );
})


// Tablas de decision
describe("Triangulo - Pruebas por tablas de decision", () => {  

    it("Triángulo equilátero - Todos los lados iguales", () => {
        expect(triangle(3, 3, 3)).toBe("Equilatero");
    });

    it("Triangulo Escaleno - Todos los lados diferentes", () => {
        expect(triangle(3, 4, 5)).toBe("Escaleno");
    });

    it("Triangulo Isosceles - Dos lados iguales", () => {
        expect(triangle(3, 3, 5)).toBe("Isosceles");
    });

    it("No es un triángulo - Suma de dos lados igual al tercero", () => {
        expect(triangle(1,2,3)).toBe("No es un triangulo");
    });

    it('Tipo de datos incorrecto  - valores <= 0', () => {
        expect(triangle(0, 4, 5)).toBe("Tipo de dato incorrecto");
    });
});