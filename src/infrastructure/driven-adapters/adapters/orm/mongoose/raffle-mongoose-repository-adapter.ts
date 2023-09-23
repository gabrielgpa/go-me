import { ILoadRaffleByIdRepository } from '@/domain/models/contracts/load-raffle-by-id-repository';
import { IMakeRaffleRepository } from '@/domain/models/contracts/make-raffle-repository';
import { MakeRaffleParams, RaffleModel } from '@/domain/models/raffle';
import { RaffleModelSchema } from '@/infrastructure/driven-adapters/adapters/orm/mongoose/models/raffle';
import { VoluntaryModelSchema } from '@/infrastructure/driven-adapters/adapters/orm/mongoose/models/voluntary';
import { map } from '@/infrastructure/entry-points/helpers';

export class RaffleMongooseRepositoryAdapter
  implements IMakeRaffleRepository, ILoadRaffleByIdRepository
{
  async make(data: MakeRaffleParams): Promise<RaffleModel> {
    const raffle = RaffleModelSchema.create(data);

    await VoluntaryModelSchema.updateOne(
      {
        _id: data.voluntary,
      },
      {
        $push: {
          raffles: [await raffle],
        },
      }
    );

    return raffle;
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
