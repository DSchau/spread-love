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

    field.resolve = async function(
      source,
      { format, ...otherArgs },
      context,
      info
    ) {
      const date = await resolve.call(this, source, otherArgs, context, info);
      // If a format argument was not provided, default to the optional
      // defaultFormat argument taken by the @date directive:
      return formatDate(date, format || defaultFormat);
    };

    field.type = GraphQLString;
  }
};
