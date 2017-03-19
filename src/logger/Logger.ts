import { injectable, inject } from 'comet-ioc'
import * as winston from 'winston'

import { ILogger } from './ILogger'
import { LoggerToken } from './LoggerToken'

@injectable()
export class Logger implements ILogger {
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

  @inject(LoggerToken)
  private $logger: winston.LoggerInstance
}
