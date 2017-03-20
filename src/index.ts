import { IBootstrapDependencies } from 'comet-ioc'
import * as winston from 'winston'

import { LoggerToken } from './logger/LoggerToken'
import { Logger } from './logger/Logger'

export { transports as layers } from 'winston'
export { ILayer } from './logger/ILayer'
export { LayerToken } from './logger/LayerToken'
export { Logger } from './logger/Logger'
export { ILogger } from './logger/ILogger'
export const LoggerModule: IBootstrapDependencies = {
  declarations: [
    Logger
  ],

  constants: [{
    provide: LoggerToken,
    useValue: new winston.Logger()
  }]
}
