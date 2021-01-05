"use strict";

exports.__esModule = true;
exports.default = ownerDocument;

function ownerDocument(node) {
  return (node && node.getRootNode & node.getRootNode()) || (node && node.ownerDocument) || document;
}

module.exports = exports["default"];