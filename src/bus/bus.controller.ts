import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BusService } from './bus.service';
import { CreateBusDto } from './dto/create-bus.dto';
import { UpdateBusDto } from './dto/update-bus.dto';

@Controller('bus')
export class BusController {
  constructor(private readonly busService: BusService) {}

  @Post('create')
  create(@Body() createBusDto: CreateBusDto) {
    return this.busService.create(createBusDto);
  }

  @Get('findAll')
  findAll() {
    return this.busService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.busService.findOne(id);
  }

  @Patch('update/:id/:code')
  update(@Param('id') id: string,  @Param('code')code:string, @Body() updateBusDto: UpdateBusDto) {
    return this.busService.update(id,code, updateBusDto);
  }

  @Delete('delete/:id/:code')
  remove(@Param('id') id: string, @Param('code') code:string) {
    return this.busService.remove(id,code);
  }
}
