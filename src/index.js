const { swagger: v1Docs } = require('./docs/swagger.js')
const app = require('./app.js')

app.listen(app.get('port'), () => {
  console.log(`🚀 Server listening on ${app.get('port')}`)
  v1Docs(app, app.get('port'))

  app.use((req, res) => {
    return res.render('404')
  })
})
