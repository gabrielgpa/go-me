import { Adapter, Service } from '@tsclean/core';

import {
  IListVoluntariesRepository,
  LIST_VOLUNTARIES_REPOSITORY,
} from '@/domain/models/contracts/list-voluntaries-repository';
import { VoluntaryModel } from '@/domain/models/voluntary';
import { IListVoluntariesService } from '@/domain/use-cases/list-voluntaries-service';

@Service()
export class ListVoluntariesServiceImpl implements IListVoluntariesService {
  constructor(
    @Adapter(LIST_VOLUNTARIES_REPOSITORY)
    private readonly listVoluntariesRepository: IListVoluntariesRepository
  ) {}

  async load(): Promise<VoluntaryModel[]> {
    return this.listVoluntariesRepository.load();
  }
}
