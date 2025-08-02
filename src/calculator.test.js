import { calculator } from "./calculator.js";

test('Add', () => {
    expect(calculator.add(3, 5)).toBe(8);
});
test('Subtract', () => {
    expect(calculator.subtract(2, 5)).toBe(-3);
    expect(calculator.subtract(5, 1)).toBe(4);
})
test('Multiply', () => {
    expect(calculator.multiply(9, 2)).toBe(18);
    expect(calculator.multiply(-2, 77)).toBe(-154);
})
test('Divide', () => {
    expect(calculator.divide(4, 2)).toBe(2);
    expect(calculator.divide(0, -2)).toBe(-0);
    expect(calculator.divide(2, 0)).toBe(Infinity);
})