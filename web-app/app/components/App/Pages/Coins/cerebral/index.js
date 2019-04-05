import * as sequences from './sequences'
import * as providers from './providers'

export default {
  state: {
    currentPage   : 'Coins',
    coinList      : [],
    isLoadingCoins: false,
    error         : null
  },
  sequences,
  providers
}
