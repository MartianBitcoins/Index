
module.exports = ({ production, body, state, styleTags, omitJs }) => `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Martian Bitcoins</title>
    <meta name="description" content="Martian Bitcoins Index">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
  </head>
  <body>
    ${styleTags}
    <script>
      window.mbiState = JSON.parse('${JSON.stringify(state)}')
    </script>
    <div id="app">${body}</div>
    ${omitJs ? '' : '<script src="/client_bundle.js"></script>'}
  </body>
</html>
`
