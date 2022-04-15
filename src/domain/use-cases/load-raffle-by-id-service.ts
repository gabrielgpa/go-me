import { RaffleModel } from '@/domain/models/raffle';

export const LOAD_RAFFLE_BY_ID_SERVICE = 'LOAD_RAFFLE_BY_ID_SERVICE';

export interface ILoadRaffleByIdService {
  load: (id: string | number) => Promise<RaffleModel>;
}
