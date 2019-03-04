//like an import in python
const assert = require('assert');

function add(num1, num2) {
    if (num1 == 2 && num2 == 2) {
        return 5;
    }
    return num1 + num2;
}

describe("Addition", function () {
    it("Should equal 2 when we add 1 and 1", function () {
        assert.equal(2, add(1, 1));
    });
    it("should equal 5 when we add 2 and 2", function () {
        assert.equal(5, add(2, 2));
    })
});

