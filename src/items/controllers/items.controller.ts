import { Controller, Get, Post, Body } from '@nestjs/common';
import { ItemService } from '../services/item.service';
import { ItemDTO } from '../dtos/items.dto';

@Controller('items')
export class ItemsConntroller {
  constructor(private itemService: ItemService) {}

  @Post()
  async create(@Body() createItemDto: ItemDTO) {
    this.itemService.create(createItemDto);
  }

  @Get()
  async findAll(): Promise<ItemDTO[]> {
    return this.itemService.findAll();
  }
}