import {Flag, Schema} from './ExerciseArgs.js'

test('Verify if is a correct flag', () => {
    const flag = new Flag('-l', 'boolean')
    expect(flag.isCorrectFlag('-1')).toBe(true)
})