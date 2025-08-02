import { reversedString } from "./reverse-string.js";

test('Reversed string', () => {
    expect(reversedString('Hello world!')).toBe('!dlrow olleH');
    expect(reversedString('Brown chair.')).toBe('.riahc nworB');
    expect(reversedString('019ght iu')).toBe('ui thg910');
})