import { set } from 'cerebral/factories'
import { state, props } from 'cerebral'
import * as actions from './actions'

export const openPostsPage =  [
  set(state`isLoadingCoins`, true),
  actions.getCoins,
  set(state`coinList`, props`coins`),
  set(state`isLoadingPosts`, false)
]
