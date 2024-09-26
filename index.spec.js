const { triangle } = require( "./index.js");

describe("triangle", () => {

    // Tipos de datos correctos
    it("should return 'Equilatero' when all sides are equal", () => {
        expect(triangle(3, 3, 3)).toBe("Equilatero");
    });

    it("should return 'Escaleno' when all sides are different", () => {
        expect(triangle(3, 4, 5)).toBe("Escaleno");
    });

    it("should return 'Isosceles' when two sides are equal", () => {
        expect(triangle(3, 3, 4)).toBe("Isosceles");
    });

    it("should return 'Isosceles' when two sides are equal", () => {
        expect(triangle(3, 4, 3)).toBe("Isosceles");
    });

    it("should return 'Isosceles' when two sides are equal", () => {
        expect(triangle(4, 3, 3)).toBe("Isosceles");
    });
    
    // Tipos de datos correctos pero no es un triangulo
    it("should return 'No es un triangulo' when any side is not equal", () => {
        expect(triangle(1, 2, 5)).toBe("No es un triangulo");
    });

    // Tipo de datos incorrectos con letras
    it("should return 'Tipo de dato incorrecto' when any side is not a number", () => {
        expect(triangle("a", 4, 5)).toBe("Tipo de dato incorrecto");
    }
    );
    it("should return 'Tipo de dato incorrecto' when any side is not a number", () => {
        expect(triangle(4, "a", 5)).toBe("Tipo de dato incorrecto");
    }
    );

    it("should return 'Tipo de dato incorrecto' when any side is not a number", () => {
        expect(triangle(4, 5, "a")).toBe("Tipo de dato incorrecto");
    }
    );

    // Tipo de datos incorrectos con valores negativos
    it("should return 'Tipo de dato incorrecto' when any side is negative", () => {
        expect(triangle(-1, 4, 5)).toBe("Tipo de dato incorrecto");
    }
    );
    it("should return 'Tipo de dato incorrecto' when any side is negative", () => {
        expect(triangle(4, -1, 5)).toBe("Tipo de dato incorrecto");
    }
    );

    it("should return 'Tipo de dato incorrecto' when any side is negative", () => {
        expect(triangle(4, 5, -1)).toBe("Tipo de dato incorrecto");
    }
    );
})