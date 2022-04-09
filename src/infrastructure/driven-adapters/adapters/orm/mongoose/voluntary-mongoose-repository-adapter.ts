import { IAddVoluntaryRepository } from '@/domain/models/contracts/add-voluntary-repository';
import { IListVoluntariesRepository } from '@/domain/models/contracts/list-voluntaries-repository';
import { IMakeAvailableVoluntaryRepository } from '@/domain/models/contracts/make-available-voluntary-repository';
import { IRemoveVoluntaryRepository } from '@/domain/models/contracts/remove-voluntary-repository';
import { AddVoluntaryParams, VoluntaryModel } from '@/domain/models/voluntary';
import { VoluntaryModelSchema } from '@/infrastructure/driven-adapters/adapters/orm/mongoose/models/voluntary';

export class VoluntaryMongooseRepositoryAdapter
  implements
    IAddVoluntaryRepository,
    IListVoluntariesRepository,
    IMakeAvailableVoluntaryRepository,
    IRemoveVoluntaryRepository
{
  async add(data: AddVoluntaryParams): Promise<VoluntaryModel> {
    return VoluntaryModelSchema.create(data);
  }

  async load(): Promise<VoluntaryModel[]> {
    return VoluntaryModelSchema.find();
  }

  async makeAvailable(
    voluntaryId: string,
    data: IMakeAvailableVoluntaryRepository.Params
  ): Promise<VoluntaryModel> {
    const filter = { _id: voluntaryId };
    const update = { available: data.available };
    const newData = { new: true };

    return VoluntaryModelSchema.findOneAndUpdate(
      filter,
      update,
      newData
    ).exec();
  }

  async remove(voluntaryId: string): Promise<any> {
    const filter = { _id: voluntaryId };
    return VoluntaryModelSchema.deleteOne(filter).exec();
  }
}
