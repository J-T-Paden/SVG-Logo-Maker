const {Square, Circle, Triangle} = require('./shapes')
test('testing square values', () => {
    const square = new Square ('blue', 'ABC', 'green')
    expect (square.textColor).toBe('blue');
    expect (square.text).toBe('ABC')
    expect (square.shapeColor).toBe('green')
    expect (square.renderShape()).toBe('<rect x="10" y="10" width="200" height="200" fill="green"/>')
})
test('testing circle values', () => {
    const circle = new Circle ('blue', 'ABC', 'green')
    expect (circle.textColor).toBe('blue');
    expect (circle.text).toBe('ABC')
    expect (circle.shapeColor).toBe('green')
    expect (circle.renderShape()).toBe('<circle cx="150" cy="100" r="80" fill="green" />')
});
test('testing triangle values', () => {
    const triangle = new Triangle ('blue', 'ABC', 'green')
    expect (triangle.textColor).toBe('blue');
    expect (triangle.text).toBe('ABC')
    expect (triangle.shapeColor).toBe('green')
    expect (triangle.renderShape()).toBe('<polygon points="150,10 10,190 290,190" fill="green" />')
})