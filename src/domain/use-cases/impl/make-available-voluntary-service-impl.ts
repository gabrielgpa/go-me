import { Adapter, Service } from '@tsclean/core';

import {
  MAKE_AVAILABLE_VOTUNTATY_REPOSITORY,
  IMakeAvailableVoluntaryRepository,
} from '@/domain/models/contracts/make-available-voluntary-repository';
import { VoluntaryModel } from '@/domain/models/voluntary';
import { IMakeAvailableVoluntaryService } from '@/domain/use-cases/make-available-voluntary-service';

@Service()
export class MakeAvailableVoluntaryServiceImpl
  implements IMakeAvailableVoluntaryService
{
  constructor(
    @Adapter(MAKE_AVAILABLE_VOTUNTATY_REPOSITORY)
    private readonly MakeAvailableVoluntaryRepository: IMakeAvailableVoluntaryRepository
  ) {}

  async makeAvailableVoluntarySevice(
    voluntaryId: string,
    data: IMakeAvailableVoluntaryService.Params
  ): Promise<VoluntaryModel> {
    return this.MakeAvailableVoluntaryRepository.makeAvailableRepository(
      voluntaryId,
      data
    );
  }
}
