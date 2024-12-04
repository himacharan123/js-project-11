import { caesarCipher } from "./caesarCipher.js";
describe("Caesar Cipher Tests", () => {
  test("Encrypts a string with a positive shift", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });

  test("Decrypts a string with a negative shift", () => {
    expect(caesarCipher("Khoor, Zruog!", -3)).toBe("Hello, World!");
  });

  test("Handles large positive shifts", () => {
    expect(caesarCipher("Hello, World!", 29)).toBe("Khoor, Zruog!");
  });

  test("Handles large negative shifts", () => {
    expect(caesarCipher("Khoor, Zruog!", -29)).toBe("Hello, World!");
  });

  test("Retains non-alphabetic characters", () => {
    expect(caesarCipher("123!@#", 5)).toBe("123!@#");
  });

  test("Works with lowercase letters only", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
  });

  test("Works with uppercase letters only", () => {
    expect(caesarCipher("XYZ", 3)).toBe("ABC");
  });

  test("Handles zero shift correctly", () => {
    expect(caesarCipher("Hello, World!", 0)).toBe("Hello, World!");
  });

  test("Handles empty string", () => {
    expect(caesarCipher("", 5)).toBe("");
  });
});
