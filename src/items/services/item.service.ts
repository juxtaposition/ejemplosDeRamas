
import { Injectable } from '@nestjs/common';
import { ItemDTO } from '../dtos/items.dto'; 

@Injectable()
export class ItemService {
  private readonly cats: ItemDTO[] = [];

  create(cat: ItemDTO) {
    this.cats.push(cat);
  }

  findAll(): ItemDTO[] {
    return this.cats;
  }
}