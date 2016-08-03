const h = require('idom')
const addPx = require('add-px-to-style')

const parseValue = (prop, val) => typeof val === 'number' ? addPx(prop, val) : val

const transformProps = (props) => {
  if (props.style && typeof props.style === 'object') {
    Object.keys(props.style)
      .forEach(key => {
        props.style[key] = parseValue(key, props.style[key])
      })
  }

  for (let key in props) {
    if (/^on/.test(key)) {
      const lowerkey = key.toLowerCase()
      if (lowerkey !== key) {
        props[lowerkey] = props[key]
        delete props[key]
      }
    } else if (key==='className') {
      props['class'] = props[key]
      delete props[key]
    }
  }
  return props
}

module.exports = (tag, props, ...children) => {
  if (props && props.children) {
    children = props.children
    delete props.children
  }

  props = transformProps(props || {})

  if (typeof tag === 'function') {
    props.children = children
  }
  return h(tag, props, ...children)
}
