const unary = require('../src/relation/unary')
const mockFn = jest.fn((n) => (n))
describe('Unary (fn => fn) test', () => {
  const wrapper = unary(mockFn)
  test('Should always output first argument value of the wrapped function', () => {
    expect(wrapper(1)).toBe(1)
    expect(wrapper(2, 5, 7, 3)).toBe(2)
  })

  test('Should return a function', () => {
    expect({}.toString.call(wrapper) === '[object Function]').toBeTruthy()
    expect(wrapper).toBeInstanceOf(Object)
  })
})
