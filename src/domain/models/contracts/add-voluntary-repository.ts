import { VoluntaryModel, AddVoluntaryParams } from '@/domain/models/voluntary';

export const ADD_VOLUNTARY_REPOSITORY = 'ADD_VOLUNTARY_REPOSITORY';

export interface IAddVoluntaryRepository {
  addVoluntaryRepository: (data: AddVoluntaryParams) => Promise<VoluntaryModel>;
}
