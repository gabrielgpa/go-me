import { IAddRaffleRepository } from '@/domain/models/contracts/add-raffle-repository';
import { ILoadRaffleByIdRepository } from '@/domain/models/contracts/load-raffle-by-id-repository';
import { AddRaffleParams, RaffleModel } from '@/domain/models/raffle';
import { RaffleModelSchema } from '@/infrastructure/driven-adapters/adapters/orm/mongoose/models/raffle';
import { map } from '@/infrastructure/entry-points/helpers';

export class RaffleMongooseRepositoryAdapter
  implements IAddRaffleRepository, ILoadRaffleByIdRepository
{
  async add(data: AddRaffleParams): Promise<RaffleModel> {
    return RaffleModelSchema.create(data);
  }

  async load(id: string | number): Promise<RaffleModel> {
    const filter = { _id: id };
    const populate = {
      path: 'voluntary',
      select: ['name', 'email'],
      transform: (obj: any) => {
        return map(obj);
      },
    };

    const raffle: RaffleModel = await RaffleModelSchema.findById(filter)
      .populate(populate)
      .lean();

    return raffle && map(raffle);
  }
}
