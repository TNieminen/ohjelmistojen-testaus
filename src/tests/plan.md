# Some sort of very rough plan for Unit Tests

### add.js
Since the module only accepts numbers as parameters. Test postive and negative combinations and decimals
mocks: setMockCreateMathOperation

### at.js
Test different situations and match to known expected results.
mocks: setMockBaseAt and setMockBaseFlatten

### camelCase.js
Test cases for example testing test-case -> testCase, tEST cASE -> testCase. Parameter expects string as parameter
mocks: setMockUpperFirst setMockWords setMockToString

### capitalize.js
Test cases similarly testing known cases, for example: test -> Test, TEST -> Test. No need to test other than strings?
mocks: setMockUpperFirst setMockToString

### castArray.js
Test different situations, here we can add more cases like Null, undefined and such (mock objects). 'test' -> ['test']
mocks: no mocks?

### ceil.js
Expects number, so only test numbers, 3.001 -> 4
mocks: setMockCreateRound

### chunk.js
Test different cases, for example [1,2,3,4,5] and 2 -> [[1,2],[3,4],[5]]
mocks: setMockSlice setMockToInteger

### clamp.js
Not 100% what this code even does? but test different known cases
mocks: none

### compact.js
Test cases with different amounts of 'falsey' values, and make sure the function removes them
mocks: none

### countBy.js
One test case is the example in the code.
mocks: setMockBaseAssignValue setMockReduce

### defaultTo.js
Parameters can be anything! Test many edge cases
mocks: none

### defaultToAny.js
similar to above
mocks: setMockArrayReduce setMockDefaultTo

### difference.js
Test all 3 different mock possibilities?
mocks: setMockBaseDifference setMockBaseFlatten setMockIsArrayLikeObject

### divide.js
similar to add
mocks: setMockCreateMathOperation

### drop.js
Simple unit tests in this case
mocks: setMockSlice setMockToInteger

### endsWith.js
true or false return value and NO mocks, simple test
mocks: none

### eq.js
similar to above, only boolean and no mocks, = simple
mocks: none

### every.js
same as above
mocks: none

### filter.js
no mocks, but test different cases that are known
mocks: none

### get.js
Cases and mock options
mocks: setMockBaseGet

### isArgument.js

mocks: setMockGetTag setMockIsObjectLike

### isArrayLike.js

mocks: setMockIsLength



### NOTES:
If we are not allowed to test internals (using mocks) then dont make mocks for those, and assume they are perfect?

