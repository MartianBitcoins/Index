import React from 'react'
import { state } from 'cerebral'
import { connect } from '@cerebral/react'

export default connect(
  {
    foo: state.foo
  },
  function App({ foo }) {
    return (
      <div>
        foo: {foo}
      </div>
    )
  }
)