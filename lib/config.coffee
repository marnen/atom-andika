demoSpan = (content, {className}) ->
  "<span class='andika demo #{className}'>#{content}</span>"

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
          title: 'Lowercase a and g'
          description: "#{demoSpan 'ag', className: 'single-storey'} single-storey or #{demoSpan 'ag', className: 'double-storey'} double-storey"
          type: 'boolean'
          default: false
          enum: [
            {value: false, description: 'Single-storey'}
            {value: true, description: 'Double-storey'}
          ]
        straightT:
          order: 2
          title: 'Lowercase t'
          description: "#{demoSpan 't', className: 'curved-t'} curved or #{demoSpan 't', className: 'straight-t'} straight"
          type: 'boolean'
          default: false
          enum: [
            {value: false, description: 'Curved'}
            {value: true, description: 'Straight'}
          ]
        slashed0:
          order: 3
          title: 'Slashed 0'
          description: "#{demoSpan '0', className: 'slashed-0'} slash or #{demoSpan '0', className: 'plain-0'} no slash"
          type: 'boolean'
          default: true
          enum: [
            {value: true, description: 'Slash'}
            {value: false, description: 'No slash'}
          ]
