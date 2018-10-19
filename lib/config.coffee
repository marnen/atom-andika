module.exports =
  config:
    monospace:
      order: 1
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
    fontFeatures:
      order: 2
      type: 'object'
      properties:
        doubleStoreyAG:
          order: 1
          title: 'a and g'
          description: '<span class="andika demo single-storey">ag</span>  single-storey or <span class="andika demo double-storey">ag</span>  double-storey'
          type: 'boolean'
          default: false
          enum: [
            {value: false, description: 'Single-storey'}
            {value: true, description: 'Double-storey'}
          ]
