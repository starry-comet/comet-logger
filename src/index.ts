import { IBootstrapDependencies } from 'comet-ioc'
import * as winston from 'winston'
import { isWorker, worker } from 'cluster'

import { LoggerToken } from './logger/LoggerToken'
import { Logger } from './logger/Logger'

let logger = new winston.Logger()
let label = 'master'

if (isWorker) {
  label = `worker-${ worker.id }`
}

logger.add(winston.transports.Console, {
  level: 'silly',
  silent: false,
  name: 'console',
  colorize: true,
  prettyPrint: true,
  timestamp: true,
  showLevel: true,
  label
}, false)

export { Logger } from './logger/Logger'
export { ILogger } from './logger/ILogger'
export const LoggerModule: IBootstrapDependencies = {
  declarations: [
    Logger
  ],

  constants: [{
    provide: LoggerToken,
    useValue: logger
  }]
}
