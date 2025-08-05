# NUMAI: A spreadsheet powered by AI

NUMAI is a basic spreadsheet where formulas can be given in English (or any natural language) and translated into actual JavaScript through [LM Studio](https://lmstudio.ai/) or [Ollama](https://ollama.com). You can switch between these two language servers in the top pannel, where you can select a different model on the fly.

This is a very basic `spreadsheet` than can be modified to better suit your needs if necessary. I don't claim that this is fullfledged spreadsheet. 🤫


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

## Code

The main file is `index.html` in `code`. You then launch your `HTTP server` with python from within the directory `code`.

```sh
python -m http.server --directory . 8080
```

### LLM Server
 By default, this spreadsheet uses a local `LM Studio` sever with as model: `codestral` or an `Ollama` server with the same model.

 The default parameters can be modified with these lines:

 ```javascript
      //LM Studio connection parameters
      window.llm_url = "ws://localhost:1234";
      window.llm_model = "codestral-22b-v0.1-mlx-3";

      //Ollama connection parameters
      window.ollama_url = "http://localhost:11434";
      window.ollama_model = "codestral";

      //Initial selection is LM Studio
      window.selectOllama = false;
 ```
