'use strict';

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

const { SchemaDirectiveVisitor } = require('apollo-server-express');

const formatDate = require('date-fns/format');

const { defaultFieldResolver, GraphQLString } = require('graphql');

module.exports = class FormattableDateDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    const { defaultFormat } = this.args;
    field.args.push({
      name: 'format',
      type: GraphQLString,
    });

    field.resolve = async function(source, _ref, context, info) {
      let { format } = _ref,
        otherArgs = _objectWithoutProperties(_ref, ['format']);

      const date = await resolve.call(this, source, otherArgs, context, info); // If a format argument was not provided, default to the optional
      // defaultFormat argument taken by the @date directive:

      return formatDate(date, format || defaultFormat);
    };

    field.type = GraphQLString;
  }
};
