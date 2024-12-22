// JavaScript application to calculate the perimeter of different shapes

// Function to calculate the perimeter of a rectangle
function calculateRectanglePerimeter(length, width) {
    return 2 * (length + width);
}

// Function to calculate the perimeter of a circle
function calculateCirclePerimeter(radius) {
    return 2 * Math.PI * radius;
}

// Function to calculate the perimeter of a triangle
function calculateTrianglePerimeter(side1, side2, side3) {
    return side1 + side2 + side3;
}

// Function to calculate the perimeter of a square
function calculateSquarePerimeter(side) {
    return 4 * side;
}

// User interface for input and output
document.addEventListener("DOMContentLoaded", () => {
    const shapeSelect = document.getElementById("shape");
    const inputContainer = document.getElementById("inputs");
    const resultContainer = document.getElementById("result");

    // Function to dynamically generate input fields
    function updateInputs() {
        const shape = shapeSelect.value;
        inputContainer.innerHTML = "";
        resultContainer.textContent = "";

        if (shape === "rectangle") {
            inputContainer.innerHTML = `
                <label>Length: <input type="number" id="length" step="0.01"></label>
                <label>Width: <input type="number" id="width" step="0.01"></label>
            `;
        } else if (shape === "circle") {
            inputContainer.innerHTML = `
                <label>Radius: <input type="number" id="radius" step="0.01"></label>
            `;
        } else if (shape === "triangle") {
            inputContainer.innerHTML = `
                <label>Side 1: <input type="number" id="side1" step="0.01"></label>
                <label>Side 2: <input type="number" id="side2" step="0.01"></label>
                <label>Side 3: <input type="number" id="side3" step="0.01"></label>
            `;
        } else if (shape === "square") {
            inputContainer.innerHTML = `
                <label>Side: <input type="number" id="side" step="0.01"></label>
            `;
        }
    }

    // Calculate and display the result
    document.getElementById("calculate").addEventListener("click", () => {
        const shape = shapeSelect.value;
        let perimeter;

        try {
            if (shape === "rectangle") {
                const length = parseFloat(document.getElementById("length").value);
                const width = parseFloat(document.getElementById("width").value);
                perimeter = calculateRectanglePerimeter(length, width);
            } else if (shape === "circle") {
                const radius = parseFloat(document.getElementById("radius").value);
                perimeter = calculateCirclePerimeter(radius);
            } else if (shape === "triangle") {
                const side1 = parseFloat(document.getElementById("side1").value);
                const side2 = parseFloat(document.getElementById("side2").value);
                const side3 = parseFloat(document.getElementById("side3").value);
                perimeter = calculateTrianglePerimeter(side1, side2, side3);
            } else if (shape === "square") {
                const side = parseFloat(document.getElementById("side").value);
                perimeter = calculateSquarePerimeter(side);
            }

            if (isNaN(perimeter)) {
                throw new Error("Please enter valid numeric values.");
            }

            resultContainer.textContent = `The perimeter is: ${perimeter.toFixed(2)}`;
        } catch (error) {
            resultContainer.textContent = error.message;
        }
    });

    shapeSelect.addEventListener("change", updateInputs);
    updateInputs(); // Initialize inputs on page load
});
