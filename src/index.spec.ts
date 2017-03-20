import { ok } from 'assert'
import { Inject, Injectable, bootstrap } from 'comet-ioc'
import { Logger, LoggerModule } from './index'

@Injectable()
class App {

  @Inject(Logger)
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
