// create Shapes class with constructor to create shapes for index.js
class Shapes {
    constructor(textColor, text, shapeColor){
this.textColor = textColor
this.text = text
this.shapeColor = shapeColor
    }
// create render function to render to HTML
    renderStart(){
return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
    }
    renderEnd(){
        return '</svg>'
    }
}

class Square extends Shapes {
    constructor(textColor, text, shapeColor) {
        super(textColor, text, shapeColor)
    }
    renderShape() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}"/>`
    }
    renderText() {
        return `<text x="150" y="135" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}
class Triangle extends Shapes {
    constructor(textColor, text, shapeColor) {
        super(textColor, text, shapeColor)
    }
    renderShape() {
        return `<polygon points="150,10 10,190 290,190" fill="${this.shapeColor}" />`
    }
    renderText() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}
class Circle extends Shapes {
    constructor(textColor, text, shapeColor) {
        super(textColor, text, shapeColor)
    }
    renderShape() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
    renderText() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

// export shapes Class to use in index.js
module.exports = {Square, Triangle, Circle}