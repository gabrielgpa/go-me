import { VoluntaryModel, AddVoluntaryParams } from '@/domain/models/voluntary';

export const ADD_VOLUNTARY_SERVICE = 'ADD_VOLUNTARY_SERVICE';

export interface IAddVoluntaryService {
  add: (data: AddVoluntaryParams) => Promise<VoluntaryModel>;
}
