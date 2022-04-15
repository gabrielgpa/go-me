import { Mapping, Adapter, Post, Body } from '@tsclean/core';

import { RaffleModel, AddRaffleParams } from '@/domain/models/raffle';
import {
  ADD_RAFFLE_SERVICE,
  IAddRaffleService,
} from '@/domain/use-cases/add-raffle-service';

@Mapping('api/v1/raffles')
export class AddRaffleController {
  constructor(
    @Adapter(ADD_RAFFLE_SERVICE)
    private readonly addRaffleService: IAddRaffleService
  ) {}

  @Post()
  async handle(@Body() data: AddRaffleParams): Promise<RaffleModel> {
    return this.addRaffleService.add(data);
  }
}
