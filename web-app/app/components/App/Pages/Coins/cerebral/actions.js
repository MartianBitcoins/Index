import { state } from 'cerebral'

export const getCoins =  ({ api }) =>
  api.getCoins().then(coins => ({ coins }))
