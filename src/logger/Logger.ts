import { Injectable, Inject, MultiInject, Optional } from 'comet-ioc'
import * as winston from 'winston'

import { ILogger } from './ILogger'
import { LoggerToken } from './LoggerToken'
import { LayerToken } from './LayerToken'
import { ILayer } from './ILayer'

@Injectable()
export class Logger implements ILogger {
  public constructor(
    @Inject(LoggerToken) private $logger: winston.LoggerInstance,
    @MultiInject(LayerToken) @Optional() layers?: ILayer[]
  ) {
    if (layers instanceof Array) {
      layers.forEach(layer => this.$logger.add(layer, null, true))
    }
  }

  public info(message: string): void {
    this.$logger.info(message)
  }

  public warn(message: string): void {
    this.$logger.warn(message)
  }

  public debug(message: string): void {
    this.$logger.debug(message)
  }

  public error(message: string): void {
    this.$logger.error(message)
  }

  public silly(message: string): void {
    this.$logger.silly(message)
  }
}
