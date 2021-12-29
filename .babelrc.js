module.exports = function(api) {
    api.cache(false);

    return {
        "plugins": ["@babel/plugin-transform-typescript"],
        "presets": [
            "@babel/env",
            "@babel/preset-typescript",
            "@babel/preset-react"
        ]
    };
};