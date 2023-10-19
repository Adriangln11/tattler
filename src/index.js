import { swagger as v1Docs } from './docs/swagger.js'
import app from './app.js'

app.listen(app.get('port'), () => {
  console.log(`🚀 Server listening on ${app.get('port')}`)
  v1Docs(app, app.get('port'))

  app.use((req, res) => {
    return res.render('404')
  })
})
