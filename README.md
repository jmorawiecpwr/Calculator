# Web-based Calculator

This project is a simple and interactive web-based calculator with two modes: standard and scientific. It allows users to perform basic arithmetic operations as well as more advanced scientific calculations.

## Features

- **Standard mode:** Basic arithmetic operations (+, -, *, /).
- **Scientific mode:** Advanced functions (sin, cos, tan, log, sqrt, etc.).
- **Memory functions:** Memory add, subtract, and recall.
- **Responsive design:** Adapts to different screen sizes.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/web-calculator.git
    ```
2. Navigate to the project directory:
    ```sh
    cd web-calculator
    ```

## Usage

1. Open the `index.html` file in your web browser to use the calculator.
2. Click on the buttons to perform calculations. 
3. Switch between standard and scientific modes using the mode switch buttons.

## Code Explanation

### HTML (index.html)

- Contains the structure of the calculator, including buttons for numbers, operators, memory functions, and scientific functions.
- The calculator display is an input element with `readonly` attribute to prevent manual edits.

### CSS (styles.css)

- Styles the calculator for a clean and user-friendly interface.
- Includes styles for different modes and button states (hover, active).

### JavaScript (index.js)

- Handles the functionality of the calculator.
  - `appendToDisplay(input)`: Appends the clicked button value to the display.
  - `clearDisplay()`: Clears the display.
  - `calculate()`: Evaluates the expression in the display.
  - `memoryAdd()`, `memorySub()`, `recall()`: Handles memory functions.
  - `setMode(mode)`: Switches between standard and scientific modes.
  - `applyScientificFunction(func)`: Applies scientific functions to the displayed value.
  - `appendConstant(constant)`: Appends constants like π and e to the display.
