import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Personas, PersonasSchema } from 'src/personas/schema/personas.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:Personas.name,
        schema:PersonasSchema,
      }
    ])
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
