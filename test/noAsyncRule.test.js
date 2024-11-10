const { RuleTester } = require("eslint");
const noAsyncRule = require("../lib/rules/no-async");

const ruleTester = new RuleTester({});

ruleTester.run("my-rule", noAsyncRule, {
    valid: [
        {
            code: `function myFunc() { console.log("hello"); }`,
        },
        {
            code: `function * testGen() { }`,
            options: [true],
        },
    ],
    invalid: [
        {
            code: `const test = async () => { }`,
            errors: [
                { messageId: noAsyncRule.MESSAGES.NOT_ALLOWED_GEN },
            ],
        },
        {
            code: `const test = async () => { }`,
            options: [true],
            errors: [
                { messageId: noAsyncRule.MESSAGES.NOT_ALLOWED },
            ],
        },
        {
            code: `async function test () { }`,
            errors: [
                { messageId: noAsyncRule.MESSAGES.NOT_ALLOWED_GEN },
            ],
        },
        {
            code: `async function test () { }`,
            options: [true],
            errors: [
                { messageId: noAsyncRule.MESSAGES.NOT_ALLOWED },
            ],
        },
        {
            code: `function * testGen() { }`,
            errors: [
                { messageId: noAsyncRule.MESSAGES.NOT_ALLOWED_GEN },
            ],
        },
    ],
});
