//like an import in python
const assert = require('assert');

describe("Addition", function () {
    interface("Should equal 2 when we add 1 and 1", function () {
        assert.equal(2, 1, 1);
    });
});