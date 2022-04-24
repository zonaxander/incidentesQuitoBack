import { Test, TestingModule } from '@nestjs/testing';
import { IncidentesService } from './incidentes.service';

describe('IncidentesService', () => {
  let service: IncidentesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IncidentesService],
    }).compile();

    service = module.get<IncidentesService>(IncidentesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
