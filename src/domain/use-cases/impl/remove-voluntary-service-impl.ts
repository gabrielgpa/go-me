import { Adapter, Service } from '@tsclean/core';

import {
  IRemoveVoluntaryRepository,
  REMOVE_VOLUNTARY_REPOSITORY,
} from '@/domain/models/contracts/remove-voluntary-repository';
import { IRemoveVoluntaryService } from '@/domain/use-cases/remove-voluntary-service';

@Service()
export class RemoveVoluntaryServiceImpl implements IRemoveVoluntaryService {
  constructor(
    @Adapter(REMOVE_VOLUNTARY_REPOSITORY)
    private readonly removeVoluntaryRepository: IRemoveVoluntaryRepository
  ) {}

  async remove(voluntaryId: string): Promise<any> {
    return this.removeVoluntaryRepository.remove(voluntaryId);
  }
}
