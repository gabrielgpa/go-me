import { Service, Adapter } from '@tsclean/core';

import {
  ADD_VOLUNTARY_REPOSITORY,
  IAddVoluntaryRepository,
} from '@/domain/models/contracts/add-voluntary-repository';
import { VoluntaryModel, AddVoluntaryParams } from '@/domain/models/voluntary';
import { IAddVoluntaryService } from '@/domain/use-cases/add-voluntary-service';

@Service()
export class AddVoluntaryServiceImpl implements IAddVoluntaryService {
  constructor(
    @Adapter(ADD_VOLUNTARY_REPOSITORY)
    private readonly addVoluntaryRepository: IAddVoluntaryRepository
  ) {}

  async addVoluntaryService(data: AddVoluntaryParams): Promise<VoluntaryModel> {
    return this.addVoluntaryRepository.addVoluntaryRepository(data);
  }
}
