import { sumTwoNum } from "./dist/main.js";

describe("sumTwoNum tests", () => {
  it("should add two numbers togehter", () => {
  const result = sumTwoNum(5, 10);
  expect(result).toBe(15);
})
})