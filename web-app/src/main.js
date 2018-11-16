import React from 'react'

const AppWrapper = ({ name, data }) => {

  // const controller = new Controller({ state: data })

  // return React.createElement(
  //   Container,
  //   { controller: controller },
  //   React.createElement(App, null)
  // )
  return React.createElement(
    "div",
    null,
    React.createElement(
            "div",
            null,
            "Hello world"
    )
);
}

export default AppWrapper
