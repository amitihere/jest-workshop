const { calculateFinalAmount } = require("../src/pricing");

// test("example: sanity check", () => {
//   expect(1 + 1).toBe(2);
// });

test("Check for invalid sub total", () => {
  expect(() => calculateFinalAmount(-100, "DISCOUNT")).toThrow(
    "Invalid subtotal",
  );
});
test("Check for no coupon", () => {
  expect(calculateFinalAmount(100)).toBe(100);
});
test("Check for SAVE10 coupon", () => {
  expect(calculateFinalAmount(100, "SAVE10")).toBe(90);
});
test("Check for FLAT50 coupon", () => {
  expect(calculateFinalAmount(100, "FLAT50")).toBe(50);
});
test("Check for case insensitivity of coupon", () => {
  expect(calculateFinalAmount(100, "flat50")).toBe(50);
});