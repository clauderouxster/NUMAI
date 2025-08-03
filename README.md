# NUMAI
NUMAI is spreadsheet where formulas can be given in English (or any language) and translated into actual JavaScript through LM Studio.

## Code

The main file is `index.html` in `code`. You then launch your `HTTP server` with python from within the directory `code`.

```sh
python -m http.server --directory . 8080
```

## Adding a Formula

You must start your cell content with: `=`.
    For instance: `= sum of the values:`

Then you select your values with the mouse, and you press enter. 

The cell should then contain: `= sum of the values:["A1","A2","A3"]`

## Generating

You can add as many formula descriptions as you want. To transform them into actual JavaScript code, you press `Generate`.

### LM Studio
 By default, this spreadsheet uses a local `LM Studio` sever with as model: `codestral`.

 The data can be modified in index.html, see lines:

 ```javascript
      //LM Studio connection parameters
      window.baseurl = "ws://localhost:1234";
      window.model = "codestral-22b-v0.1-mlx-3";

 ```
