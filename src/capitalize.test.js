import { capitalize } from "./capitalize.js";

test('Capitalize', () => {
    expect(capitalize('hello world!')).toBe('Hello world!');
});