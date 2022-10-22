const regStringFn = /(.+?)\((.+?)\)/;
const regString = /\'(.+?)\'/

export function getFirstChildNode (node) {
  const childNode = node.childNodes;

  for (let i = 0; i < childNode.length; i++) {
    const el = childNode[i];
    if (el.nodeType === 1) {
      return el
    }
  }
}

export function checkExpressionHasData (data, expression) {
  for (const key in data) {
    if (expression.includes(key) && expression !== key) {
      return {
        key,
        expression
      }
    } else if (expression === key) {
      return {
        key,
        expression
      }
    } else {
      return null
    }
  }
}

export function checkFunctionHasArgs (str) {
  const matched = str.match(regStringFn)
  if (matched) {
    const argArr = matched[2].split(',')
    const args = checkIsString(matched[2]) ? argArr : argArr.map(item => Number(item))

    return {
      methodName: matched[1],
      args
    }
  }
}

export function checkIsString (str) {
  return str.match(regString)
}