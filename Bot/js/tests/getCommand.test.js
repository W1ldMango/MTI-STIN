const fce = require("../functions/getCommand")

test("Help command test", () => {
    expect(fce("help")).toEqual("Command list: time name course help")
})