const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')

app
  .use(bodyParser())
  .use(router.routes())

router
  .get('/lack_of_params', () => {
    throw 'nya-n'
  })
  .get('/invalid_params', () => {
    // throwする箇所に応じてdisplay_messageを変更したい場合は引数に渡す
    throw 'gya-n'
  })
  .get('/*', (ctx) => {
    ctx.body = 'kirokiro-'
  })

app.listen(3000);