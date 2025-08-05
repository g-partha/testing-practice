import { analyzeArray } from "./analyze-array.js";
test('Analyze array', () => {
    expect(analyzeArray([1,3, 6]).average).toBe(10 / 3);
    expect(analyzeArray([1,3, 6]).min).toBe(1);
    expect(analyzeArray([1,3, 6]).max).toBe(6);
    expect(analyzeArray([1,3, 6]).length).toBe(3);
});