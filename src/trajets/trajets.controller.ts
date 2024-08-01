import { Controller, Get, Post, Body, Patch, Param, Delete, Logger } from '@nestjs/common';
import { TrajetsService } from './trajets.service';
import { CreateTrajetDto } from './dto/create-trajet.dto';
import { UpdateTrajetDto } from './dto/update-trajet.dto';

@Controller('trajets')
export class TrajetsController {
  constructor(private readonly trajetsService: TrajetsService) {}

  @Post()
  create(@Body() createTrajetDto: CreateTrajetDto) {
    return this.trajetsService.create(createTrajetDto);
  }

  @Get()
  findAll() {
    Logger.log("liste de tous les trajets")
    return this.trajetsService.findAll();
  }

  @Get('findOne/:id')
  findOne(@Param('id') id: string) {
    return this.trajetsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrajetDto: UpdateTrajetDto) {
    return this.trajetsService.update(id, updateTrajetDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.trajetsService.remove(id);
  }
}
