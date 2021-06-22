# AT14

## Coding - Dev fundamentals

## Goal
- Learn basics for software development

## Course content
- Learn and use a Version Control System (Git)
- Coding Best practices and clean code, OOP
- TDD and code coverage

## Tools
- Git
- Node js
- Text editor: VS Code, Sublime, Notepad++ or IDE (Netbeans, Eclipse)
- Optional: git client

## Unit testing
Run
1. npm init
2. npm install --save-dev jest
3. Add .babelrc with the following content
```javascript
{
    "env": {
        "test": {
           "plugins": ["@babel/plugin-transform-modules-commonjs"]
        }
    }
}
```
5. npm install --save-dev @babel/plugin-transform-modules-commonjs

## Roman Calculator Kata

### Problem Description
"As a Roman Bookkeeper I want to add Roman numbers because doing it manually is too tedious." Given the Roman numerals, (IVXLCDM which mean one, five, ten, fifty, hundred, fivehundred and a thousand respectively), create two numbers and add them. As we are in Ancient Rome there is no such thing as decimals or int, we need to do this with the strings. An example would be “XIV” + “LX” = “LXXIV”

There are some rules to a Roman number:

- Numerals can be concatenated to form a larger numeral (“XX” + “II” = “XXII”)
- If a lesser numeral is put before a bigger it means subtraction of the lesser from the bigger (“IV” means four, “CM” means ninehundred)
- If the numeral is I, X or C you can’t have more than three (“II” + “II” = “IV”)
- If the numeral is V, L or D you can’t have more than one (“D” + “D” = “M”)

### Clues
String grouping and concatenation is key to solving this kata. But remember the rule that lesser numerals can preceede bigger ones.