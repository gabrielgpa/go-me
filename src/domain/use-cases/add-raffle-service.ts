import { AddRaffleParams, RaffleModel } from '@/domain/models/raffle';

export const ADD_RAFFLE_SERVICE = 'ADD_RAFFLE_SERVICE';

export interface IAddRaffleService {
  add: (data: AddRaffleParams) => Promise<RaffleModel>;
}
