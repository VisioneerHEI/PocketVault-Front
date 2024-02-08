const theme = ['f4f1bb', '3d405b', 'ff8966', '918ef4', '69a297']

const formatColorHexa = (c) => {
  return `#${c}`
}

const applyTransparence = (c, v) => {
  if (v > 1) {
    v = 1
  } else if (v < 0) {
    v = 0
  }
  v *= 16 ** 2 - 1
  v = Math.floor(v)
  v = v.toString(16)
  return `${c}${v}`
}

const color = {
  light: formatColorHexa(theme[0]),
  dark: formatColorHexa(theme[1]),
  red: formatColorHexa(theme[2]),
  primary: formatColorHexa(theme[4]),
  second: formatColorHexa(theme[3])
}

export const transColor = {}

for (const c in color) {
  transColor[c] = (v) => applyTransparence(color[c], v)
}

export default color
