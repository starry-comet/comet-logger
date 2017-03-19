# comet-logger

<p align="center">
  <img height="200" src="https://github.com/starry-comet/comet/blob/master/resources/images/comet.png?raw=true">
</p>

## roles

This project has to main goal to provide a logger to the ioc container from comet-ioc

## Usage

```ts
import {inject, injectable} from 'comet-ioc'
import {Logger, LoggerModule} from 'comet-logger'

@injectable()
class App {
  public constructor(
    @inject(Logger) private $logger: Logger
  ) {
    this.$logger.info('info')
    this.$logger.error('info')
    this.$logger.warn('info')
    this.$logger.debug('info')
    this.$logger.silly('info')
  }
}

bootstrap(App, {
  imports: [LoggerModule]
})
```

results:
```
2017-03-19T22:03:05.993Z - info: [master] info
2017-03-19T22:03:05.995Z - error: [master] info
2017-03-19T22:03:05.996Z - warn: [master] info
2017-03-19T22:03:05.997Z - debug: [master] info
2017-03-19T22:03:05.997Z - silly: [master] info
```
