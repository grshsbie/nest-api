import { Controller, Get, Post } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Post()
  create() {
    return this.songsService.create('Animals by martin amir');
  }
  @Get()
  findAll() {
    this.songsService.findAll();
  }
}
