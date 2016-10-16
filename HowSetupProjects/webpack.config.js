module.exports = {
    // Export everything inside here to a given file. Webpack will take this and load it in a uploaded file
    entry: [
        // same level in this folder
        './src/index.jsx'   // webpack will look in the folder src and for the file index.jsx
    ],
    // Declare where we want webpack to output the file
    output: {
        filename: './bundle.js' // called bundle because we bundle everything into it. JS extension because JSX will be converted to JS.
    },
    // Is necessary to use ES6 and bable
    module: {
        loaders: [{
            exclude: /node_module/, // always exclude these, we don't need them bundled, only to create our project (IGNORE NODE MODULES)
            loader: 'babel'
        }]
    }
}