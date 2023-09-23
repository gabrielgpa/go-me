/* eslint-disable @typescript-eslint/naming-convention */
import { Adapter, Service } from '@tsclean/core';

import {
  IListVoluntariesRepository,
  LIST_VOLUNTARIES_REPOSITORY,
} from '@/domain/models/contracts/list-voluntaries-repository';
import {
  MAKE_RAFFLE_REPOSITORY,
  IMakeRaffleRepository,
} from '@/domain/models/contracts/make-raffle-repository';
import { MakeRaffleParams, RaffleModel } from '@/domain/models/raffle';
import { VoluntaryModel } from '@/domain/models/voluntary';
import { IMakeRaffleService } from '@/domain/use-cases/make-raffle-service';

@Service()
export class MakeRaffleServiceImpl implements IMakeRaffleService {
  constructor(
    @Adapter(MAKE_RAFFLE_REPOSITORY)
    private readonly makeRaffleRepository: IMakeRaffleRepository,
    @Adapter(LIST_VOLUNTARIES_REPOSITORY)
    private readonly listVoluntatiesRepository: IListVoluntariesRepository
  ) {}

  async make(): Promise<RaffleModel> {
    const voluntaries: VoluntaryModel[] =
      await this.listVoluntatiesRepository.load();
    const raffle: MakeRaffleParams = {
      voluntary: this.build(voluntaries),
    };

    return this.makeRaffleRepository.make(raffle);
  }

  private build(_voluntaries: VoluntaryModel[]): String {
    // preferência por quem tem a menor quantidade de sorteios
    return '6251ed4eaa84f6119fed257f';
  }
}
