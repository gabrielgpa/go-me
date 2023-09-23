import { RaffleModel } from '@/domain/models/raffle';

export const MAKE_RAFFLE_SERVICE = 'MAKE_RAFFLE_SERVICE';

export interface IMakeRaffleService {
  make: () => Promise<RaffleModel>;
}
