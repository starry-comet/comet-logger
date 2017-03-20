# comet-logger

<p align="center">
  <img height="200" src="https://github.com/starry-comet/comet/blob/master/resources/images/comet.png?raw=true">
</p>

## roles

This project has to main goal to provide a logger to the ioc container from comet-ioc

## Usage

```ts
import {inject, injectable} from 'comet-ioc'
import {Logger, LoggerModule, LayerToken, layers} from 'comet-logger'

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
  imports: [LoggerModule],
  constants: [{
    provide: LayerToken,
    useValue: new layers.Console()
  }]
})
```

results:
```
info: info
error: info
warn: info
debug: info
silly: info
```
