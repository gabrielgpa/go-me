import { IAddRaffleRepository } from '@/domain/models/contracts/add-raffle-repository';
import { AddRaffleParams, RaffleModel } from '@/domain/models/raffle';
import { RaffleModelSchema } from '@/infrastructure/driven-adapters/adapters/orm/mongoose/models/raffle';

export class RaffleMongooseRepositoryAdapter implements IAddRaffleRepository {
  async add(data: AddRaffleParams): Promise<RaffleModel> {
    return RaffleModelSchema.create(data);
  }
}
