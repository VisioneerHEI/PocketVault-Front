import * as storage from './lStorage.js'

const tokenName = 'token'

export const save = (token) => {
  storage.setItem(tokenName, token)
  return token
}

export const get = () => {
  let result = storage.getItem(tokenName)
  if (!result && process.env.NODE_ENV === 'development') {
    result = Math.random().toString()
  }
  // toDelete
  result = Math.random().toString()
  return result
}

export const dump = () => {
  const token = get()
  storage.deleteItem(tokenName)
  return token
}
