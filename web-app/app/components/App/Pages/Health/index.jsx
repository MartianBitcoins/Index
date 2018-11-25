import React from 'react'
import { state } from 'cerebral'
import { connect } from '@cerebral/react'

export default connect({
 healthPage: state.HealthPage,
}, function HealthPage({ healthPage: { dbTime, serverTime }}) {
  return (
    <div>
      <p>Database Time: {dbTime}</p>
      <p>Server Time: {serverTime}</p>
    </div>
  )
})