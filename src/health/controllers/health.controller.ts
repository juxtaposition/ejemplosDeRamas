import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService } from '@nestjs/terminus';
import { ServerIndicator } from '../services/server-indicator.service';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private server: ServerIndicator,
  ) {}

  @Get()
  @HealthCheck()
  serverHealthCheck() {
    return this.health.check([async () => this.server.check('server')]);
  }
}
