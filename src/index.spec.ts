import { ok } from 'assert'
import { inject, injectable, bootstrap } from 'comet-ioc'
import { Logger, LoggerModule } from './index'

@injectable()
class App {

  @inject(Logger)
  public $logger: Logger
}

describe('Test index', function() {
  let app: App

  before('Bootstrap', function() {
    app = bootstrap(App, {
      imports: [LoggerModule]
    })
  })

  it('Has logger dependencies', function() {
    ok(app.$logger instanceof Logger, 'Injection failed')
  })
})
