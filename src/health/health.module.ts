import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './controllers/health.controller';
import { ServerIndicator } from './services/server-indicator.service';

@Module({
  imports: [TerminusModule],
  controllers: [HealthController],
  providers: [ServerIndicator],
})
export class HealthModule {}
