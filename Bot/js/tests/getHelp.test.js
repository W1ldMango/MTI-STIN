const fce = require("../functions/getHelp")

test("Time test", () => {
    expect(fce()).toEqual("Command list: time name course help")
})