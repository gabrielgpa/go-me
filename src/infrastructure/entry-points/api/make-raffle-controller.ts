import { Mapping, Adapter, Post } from '@tsclean/core';

import { RaffleModel } from '@/domain/models/raffle';
import {
  MAKE_RAFFLE_SERVICE,
  IMakeRaffleService,
} from '@/domain/use-cases/make-raffle-service';

@Mapping('api/v1/raffles')
export class MakeRaffleController {
  constructor(
    @Adapter(MAKE_RAFFLE_SERVICE)
    private readonly makeRaffleService: IMakeRaffleService
  ) {}

  @Post()
  async handle(): Promise<RaffleModel> {
    return this.makeRaffleService.make();
  }
}
