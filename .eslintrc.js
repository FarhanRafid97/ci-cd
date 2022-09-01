module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: ["airbnb-base", "prettier"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
    },
    rules: {
        "prefer-promise-reject-errors": "off",
    },
}
