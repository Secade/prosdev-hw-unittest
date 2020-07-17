const { gradeClassifier } = require('./index');

// TODO: Write unit tests here
describe('When inputting a valid input, ', () => {
  it('such as a whole number, the output should be "O - Outstanding"', () => {

    let input = 97;

    let ans = gradeClassifier(input);

    expect(ans).toBe("O - Outstanding");
  });

  it('such as the maximum number, the output should be "O - Outstanding"', () => {

    let input = 100;

    let ans = gradeClassifier(input);

    expect(ans).toBe("O - Outstanding");
  });

  it('such as a whole number, the output should be "V - Very Good"', () => {

    let input = 92;

    let ans = gradeClassifier(input);

    expect(ans).toBe("V - Very Good");
  });

  it('such as a decimal number, the output should be "V - Very Good"', () => {

    let input = 93.99;

    let ans = gradeClassifier(input);

    expect(ans).toBe("V - Very Good");
  });

  it('such as a whole number, the output should be "G - Good"', () => {

    let input = 87;

    let ans = gradeClassifier(input);

    expect(ans).toBe("G - Good");
  });

  it('such as a decimal number, the output should be "G - Good"', () => {

    let input = 89.50;

    let ans = gradeClassifier(input);

    expect(ans).toBe("G - Good");
  });

  it('such as a whole number, the output should be "S - Satisfactory"', () => {

    let input = 82;

    let ans = gradeClassifier(input);

    expect(ans).toBe("S - Satisfactory");
  });

  it('such as a decimal number, the output should be "S - Satisfactory"', () => {

    let input = 80.01;

    let ans = gradeClassifier(input);

    expect(ans).toBe("S - Satisfactory");
  });

  it('such as a whole number, the output should be "N - Needs Improvement"', () => {

    let input = 77;

    let ans = gradeClassifier(input);

    expect(ans).toBe("N - Needs Improvement");
  });

  it('such as a decimal number, the output should be "N - Needs Improvement"', () => {

    let input = 79.99;

    let ans = gradeClassifier(input);

    expect(ans).toBe("N - Needs Improvement");
  });

  it('such as a whole number, the output should be "D - Did Not Meet Expectation"', () => {

    let input = 72;

    let ans = gradeClassifier(input);

    expect(ans).toBe("D - Did Not Meet Expectation");
  });

  it('such as the minimum number, the output should be "D - Did Not Meet Expectation"', () => {

    let input = 0;

    let ans = gradeClassifier(input);

    expect(ans).toBe("D - Did Not Meet Expectation");
  });
});

describe('When inputting an invalid input, ', ()=>{
  it('such as a number over 100, it should output "Invalid Input"', ()=>{
    
    let input = 101;

    let ans = gradeClassifier(input);

    expect(ans).toBe("Invalid Input");
  });

  it('such as a negative number, it should output "Invalid Input"', ()=>{
    
    let input = -1;

    let ans = gradeClassifier(input);

    expect(ans).toBe("Invalid Input");
  });

  it('such as a string, it should output "Invalid Input"', ()=>{
    
    let input = "test";

    let ans = gradeClassifier(input);

    expect(ans).toBe("Invalid Input");
  });

  it('such as a numerical string, it should output "Invalid Input"', ()=>{
    
    let input = "95";

    let ans = gradeClassifier(input);

    expect(ans).toBe("Invalid Input");
  });

  it('such as a boolean, it should output "Invalid Input"', ()=>{
    
    let input = true;

    let ans = gradeClassifier(input);

    expect(ans).toBe("Invalid Input");
  });

  it('such as special characters, it should output "Invalid Input"', ()=>{
    
    let input = ":)";

    let ans = gradeClassifier(input);

    expect(ans).toBe("Invalid Input");
  });

  it('such as alphanumerical characters, it should output "Invalid Input"', ()=>{
    
    let input = "aa2fa2";

    let ans = gradeClassifier(input);

    expect(ans).toBe("Invalid Input");
  });
});
