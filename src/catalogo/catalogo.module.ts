import { Module } from '@nestjs/common';
import { CatalogoService } from './catalogo.service';
import { CatalogoController } from './catalogo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Catalogo, CatalogoSchema } from './schema/catalogo.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:Catalogo.name,
        schema:CatalogoSchema,
      }
    ])
  ],
  controllers: [CatalogoController],
  providers: [CatalogoService]
})
export class CatalogoModule {}
