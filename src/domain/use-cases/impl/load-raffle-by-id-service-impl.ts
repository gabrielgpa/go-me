import { Adapter, Service } from '@tsclean/core';

import {
  ILoadRaffleByIdRepository,
  LOAD_RAFFLE_BY_ID_REPOSITORY,
} from '@/domain/models/contracts/load-raffle-by-id-repository';
import { RaffleModel } from '@/domain/models/raffle';
import { ILoadRaffleByIdService } from '@/domain/use-cases/load-raffle-by-id-service';

@Service()
export class LoadRaffleByIdServiceImpl implements ILoadRaffleByIdService {
  constructor(
    @Adapter(LOAD_RAFFLE_BY_ID_REPOSITORY)
    private readonly loadRaffleByIdRepository: ILoadRaffleByIdRepository
  ) {}

  async load(id: string | number): Promise<RaffleModel> {
    return this.loadRaffleByIdRepository.load(id);
  }
}
