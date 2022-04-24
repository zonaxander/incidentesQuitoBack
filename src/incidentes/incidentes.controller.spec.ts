import { Test, TestingModule } from '@nestjs/testing';
import { IncidentesController } from './incidentes.controller';
import { IncidentesService } from './incidentes.service';

describe('IncidentesController', () => {
  let controller: IncidentesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IncidentesController],
      providers: [IncidentesService],
    }).compile();

    controller = module.get<IncidentesController>(IncidentesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
