const theme = ['f4f1bb', '3d405b', 'ff8966', '918ef4', '69a297']

const formatColorHexa = (c) => {
  return `#${c}`
}

export const color = {
  light: formatColorHexa(theme[0]),
  dark: formatColorHexa(theme[1]),
  red: formatColorHexa(theme[2]),
  primary: formatColorHexa(theme[4]),
  second: formatColorHexa(theme[3])
}
