const fce = require("../functions/getTime")

test("Time test", () => {
    expect(fce()).toEqual(new Date(Date.now()))
})