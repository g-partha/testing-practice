import { ceasarCipher } from "./ceasar-cipher.js";

test('Ceasar cipher: single word with no punctuation', () => {
    expect(ceasarCipher('hello', 3)).toBe('khoor');
});
test('Ceasar cipher: Multiple words with punctuation', () => {
    expect(ceasarCipher('Hello, world!', 3)).toBe('Khoor, zruog!');
});