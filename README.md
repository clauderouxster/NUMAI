# NUMAI
NUMAI is a basic spreadsheet where formulas can be given in English (or any natural language) and translated into actual JavaScript through `[LM Studio](https://lmstudio.ai/)`.
This is a very basic `spreadsheet` than can be modified to better suit your needs if necessary. I don't claim that this is fullfledged spreadsheet. 🤫

**Note:** I don't work for `LM Studio` and I have no stake in this company. If you want to change it to a different provider such as `ollama`, you will need to provide your own modification.

## Code

The main file is `index.html` in `code`. You then launch your `HTTP server` with python from within the directory `code`.

```sh
python -m http.server --directory . 8080
```

## Adding a Formula

You must start your cell content with: `=`.
    For instance: `= sum of the squared values:`

Then you select your values with the mouse, and you press enter. 

The cell should then contain: `= sum of the squared values:["A1","A2","A3"]`

## Generating

You can add as many formula descriptions as you want. To transform them into actual JavaScript code, you press `Generate`.
For instance, the above description was transformed into:

```JavaScript
getValuesFromReferences(['A1', 'A2', 'A3']).map(Number).reduce((a, b) => a + b * b, 0)
```
You can then _edit_ these formulas to better suit your needs.

### LM Studio
 By default, this spreadsheet uses a local `LM Studio` sever with as model: `codestral`.

 The data can be modified in index.html, see lines:

 ```javascript
      //LM Studio connection parameters
      window.baseurl = "ws://localhost:1234";
      window.model = "codestral-22b-v0.1-mlx-3";

 ```
