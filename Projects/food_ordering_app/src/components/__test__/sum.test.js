const { sum } = require("../sum");

test("Function sum will return the sum of two numbers",()=>{
    const result = sum(3,4);
    expect(result).toBe(5);
});