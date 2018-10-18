module.exports =
  config:
    disabledScopes:
      description: 'Disable Andika font for these CSS scopes (include the `syntax--` prefix). Useful for things such as tables that should be displayed in a monospaced font. Separate selectors with commas.'
      type: 'array'
      default: ['.syntax--table']
      items:
        type: 'string'
