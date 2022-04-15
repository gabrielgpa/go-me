import { RaffleModel } from '@/domain/models/raffle';

export const LOAD_RAFFLE_BY_ID_REPOSITORY = 'LOAD_RAFFLE_BY_ID_REPOSITORY';

export interface ILoadRaffleByIdRepository {
  load: (id: string | number) => Promise<RaffleModel>;
}
