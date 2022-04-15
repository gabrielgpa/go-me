import { AddRaffleParams, RaffleModel } from '@/domain/models/raffle';

export const ADD_RAFFLE_REPOSITORY = 'ADD_RAFFLE_REPOSITORY';

export interface IAddRaffleRepository {
  add: (data: AddRaffleParams) => Promise<RaffleModel>;
}
