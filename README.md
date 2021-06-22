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