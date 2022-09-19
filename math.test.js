const{divide,multiply,subtract,sum} = require("./math");


describe("math", () => {
  test("should sum 2+2 to be 4",() => {
    const result=sum(2,2);
    expect(result).toBe(4);
    expect(result).toBeGreaterThan(3);
  })
})


it("should sum 2+2 to be 4",() =>{
    const result =sum(2,2);
    expect(result).toBe(4);
});
it("should multiply 3*3 to result toBe 9", () =>{
    const result = multiply(3,3);
    expect(result).not.toBe(8);
});
it("should divide 4/2 to result toBe 2", () =>{
    const result = divide(4,2);
    expect(result).toBe(2);
});
it("should subtract 6-2 to result toBe 4", () =>{
    const result = subtract(6,2);
    expect(result).toBe(4);
});

it ("shouldbe falsy", () => {
    expect(undefined).toBeFalsy();
});

test("Array", () => {
    let days = ["Monday", "Tuesday", "Wednesday"];
    expect(days).toContain("Tuesday");
    expect(days).not.toContain("Friday");
})