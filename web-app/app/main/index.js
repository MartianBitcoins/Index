import initialState from './initialState'
import _ from 'lodash'

export function factory({ newState } = {}) {
  const state = _.merge({}, initialState, newState)

  return {
    state,
  }
}

export default factory()