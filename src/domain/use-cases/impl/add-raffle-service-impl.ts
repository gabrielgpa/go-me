import { Adapter, Service } from '@tsclean/core';

import {
  ADD_RAFFLE_REPOSITORY,
  IAddRaffleRepository,
} from '@/domain/models/contracts/add-raffle-repository';
import { AddRaffleParams, RaffleModel } from '@/domain/models/raffle';
import { IAddRaffleService } from '@/domain/use-cases/add-raffle-service';

@Service()
export class AddRaffleServiceImpl implements IAddRaffleService {
  constructor(
    @Adapter(ADD_RAFFLE_REPOSITORY)
    private readonly addRaffleRepository: IAddRaffleRepository
  ) {}

  async add(data: AddRaffleParams): Promise<RaffleModel> {
    return this.addRaffleRepository.add(data);
  }
}
