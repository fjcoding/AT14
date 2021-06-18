const { test } = require('jest-circus')
const isCorrectFlag = require('./isCorrectFlag')

test('Verify if is a correct flag', () =>
expect(isCorrectFlag(-l)).toBe(-l)
)