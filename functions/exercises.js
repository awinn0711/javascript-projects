function makeLine(size, character = "#") {
    let line = "";
    for (let i = 0; i < size; i++) {
        line += character;
    }
    return line;
}

//console.log(makeLine(6, "W"));

function makeSquare(size, character = "#") {
    let square = makeRectangle(size,size, character);
    // for (let i = 0; i < size; i++) {
    //     square += "\n" + makeLine(size); 
    // }
    // return square.slice(1);
    return square;
}

//console.log(makeSquare(5, "W"));

function makeRectangle(width, height, character = "#") {
    let rectangle = "";
    for (let i = 0; i < height; i ++) {
        rectangle += "\n" + makeLine(width, character);
    }
    return rectangle.slice(1);
}
//console.log(makeRectangle(3, 4, "W"));

function makeDownwardStairs(height, character = "#") {
    let downstairs = "";
    for (let i =0; i < height; i++) {
        downstairs += "\n" + makeLine(i + 1, character);
    }
    return downstairs.slice(1);
}
//console.log(makeDownwardStairs(5, "W"));

function makeSpaceLine(numSpaces, numChars, character = "#") {
    let spaces = "";
    for (let i = 0; i < numSpaces; i ++) {
        spaces += " ";
    }
    let spaceline = spaces + makeLine(numChars, character) + spaces;
    return spaceline;
}

//console.log (makeSpaceLine(5,5, "W") + makeLine(3));

function makeIsoscelesTriangle(height, character = "#") {
    let isoscelesTriangle = "";
    for (let i = 0; i < height; i ++) {
        isoscelesTriangle += "\n" + makeSpaceLine(height - i - 1, 2 * i + 1, character);
    }
    return isoscelesTriangle.slice(1);
}
//console.log (makeIsoscelesTriangle(6, "W"));

function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}

//console.log(reverse(makeIsoscelesTriangle(5)));

function makeDiamond(height, character = "#") {
    let diamond = makeIsoscelesTriangle(height, character) + "\n" + reverse(makeIsoscelesTriangle(height, character));
    return diamond;
}
console.log(makeDiamond(5, "$"));

