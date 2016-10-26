"use strict";

module.exports = {
    meta: {
        docs: {
            description: "Doesn't allow to write .only() in tests",
            category: "Tests errors",
            recommended: true
        }
    },

    create: function(context) {
        var isCalleeNamedOnly = function(node) {
            return node.callee && 
                   node.callee.property &&
                   node.callee.property.name === 'only';
        };

        var isObjectCalledItOrDescribe = function(node) {
            return node.callee && 
                   node.callee &&
                   node.callee.object &&
                   (node.callee.object.name === 'it' || node.callee.object.name === 'describe');
        };

        return {
            CallExpression: function(node) {
              if (isCalleeNamedOnly(node) && isObjectCalledItOrDescribe(node)) {
                  var message = 'Remove ' + node.callee.object.name + '.only() before committing';

                  context.report({
                      node: node,
                      message: message,
                  });
              }
            }
        };
    }
};
