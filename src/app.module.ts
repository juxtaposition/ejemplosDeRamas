import { Module } from '@nestjs/common';
import { AppConfiguration } from './configuration/app.configuration';
import { HealthModule } from './health';
import { ItemModule } from './items/item.module';

@Module({
  imports: [
    HealthModule,
    ItemModule,
  ],
  providers: [AppConfiguration]
})
export class AppModule {}
