module.exports =
  config:
    monospace:
      name: 'Monospace Font'
      type: 'object'
      properties:
        scopes:
          order: 1
          title: 'Use monospace font for these CSS scopes'
          description: 'Include the `syntax--` prefix and separate selectors with commas'
          type: 'array'
          default: ['.syntax--table']
          items:
            type: 'string'
        fontSizePercent:
          order: 2
          title: 'Font Size Percentage'
          description: 'Size of monospaced font, expressed as a percentage relative to Andika'
          type: 'number'
          default: 100
          minimum: 0
          maximum: 1000