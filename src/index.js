const MESSAGES = {
    NOT_ALLOWED: "notAllowed",
    NOT_ALLOWED_GEN: "notAllowedGen",
};

function inspectNodeForAsync(node, context) {
    if (node.async || (node.generator && context.options[0] !== true)) {
        context.report({
            node,
            messageId: context.options[0] === true ? MESSAGES.NOT_ALLOWED : MESSAGES.NOT_ALLOWED_GEN,
        });
    }
}

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "disallows code that will transpile into use of regenerator",
            category: "Unwanted output",
            url: "/Users/yoavniran/dev/eslint-plugin-no-async/package.json#readme",
        },

        schema: [{ "type": "boolean" }],

        messages: {
            [MESSAGES.NOT_ALLOWED]: "Async/Await use isn't allowed.",
            [MESSAGES.NOT_ALLOWED_GEN]: "Async/Await or Generators use isn't allowed.",
        },
    },
    create: function(context) {
        return {
            FunctionDeclaration(node) {
                inspectNodeForAsync(node, context);
            },

            ArrowFunctionExpression(node) {
                inspectNodeForAsync(node, context);
            },
        };
    },

    MESSAGES: MESSAGES,
};

