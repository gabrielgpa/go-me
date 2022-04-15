import { Mapping, Get, Adapter, Param } from '@tsclean/core';

import { RaffleModel } from '@/domain/models/raffle';
import {
  ILoadRaffleByIdService,
  LOAD_RAFFLE_BY_ID_SERVICE,
} from '@/domain/use-cases/load-raffle-by-id-service';

@Mapping('api/v1/raffles')
export class LoadRaffleByIdController {
  constructor(
    @Adapter(LOAD_RAFFLE_BY_ID_SERVICE)
    private readonly loadRaffleByIdService: ILoadRaffleByIdService
  ) {}

  @Get(':id')
  async handle(@Param('id') id: string): Promise<RaffleModel> {
    return this.loadRaffleByIdService.load(id);
  }
}
