import { IAddVoluntaryRepository } from '@/domain/models/contracts/add-voluntary-repository';
import { IListVoluntariesRepository } from '@/domain/models/contracts/list-voluntaries-repository';
import { AddVoluntaryParams, VoluntaryModel } from '@/domain/models/voluntary';
import { VoluntaryModelSchema } from '@/infrastructure/driven-adapters/adapters/orm/mongoose/models/voluntary';

export class VoluntaryMongooseRepositoryAdapter
  implements IAddVoluntaryRepository, IListVoluntariesRepository
{
  async addVoluntaryRepository(
    data: AddVoluntaryParams
  ): Promise<VoluntaryModel> {
    return VoluntaryModelSchema.create(data);
  }

  async listVoluntariesRepository(): Promise<VoluntaryModel[]> {
    return VoluntaryModelSchema.find();
  }
}
