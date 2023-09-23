import { MakeRaffleParams, RaffleModel } from '@/domain/models/raffle';

export const MAKE_RAFFLE_REPOSITORY = 'MAKE_RAFFLE_REPOSITORY';

export interface IMakeRaffleRepository {
  make: (data: MakeRaffleParams) => Promise<RaffleModel>;
}
