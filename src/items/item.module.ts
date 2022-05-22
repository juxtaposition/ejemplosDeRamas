import { Module } from '@nestjs/common';
import { ItemService } from './services/item.service';
import { ItemsConntroller } from './controllers/items.controller';

@Module({
  controllers: [ItemsConntroller],
  providers: [ItemService],
  exports: [ItemService],
})
export class ItemModule {}
