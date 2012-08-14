var main = require('../main')

describe("The Main Module", function () {
    it("Has a start server method", function () {
        expect(main.startServer).toBeDefined();
    })
})
