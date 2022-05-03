import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CatalogoService } from './catalogo.service';
import { CreateCatalogoDto } from './dto/create-catalogo.dto';
import { UpdateCatalogoDto } from './dto/update-catalogo.dto';

@ApiTags('catalogo')
@Controller('catalogo')
export class CatalogoController {
  constructor(private readonly catalogoService: CatalogoService) {}

  @Post()
  create(@Body() createCatalogoDto: CreateCatalogoDto) {
    return this.catalogoService.create(createCatalogoDto);
  }

  @Get()
  findAll() {
    return this.catalogoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.catalogoService.findOne(id);
  }

  @Get('findIdPadre/:idPadre')
  findIdPadre(@Param('idPadre') idPadre: string) {
    return this.catalogoService.findIdPadre(idPadre);
  }

  @Get('findByName/:name')
  findName(@Param('name') name: string) {
    return this.catalogoService.findName(name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatalogoDto: UpdateCatalogoDto) {
    return this.catalogoService.update(+id, updateCatalogoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catalogoService.remove(+id);
  }
}
