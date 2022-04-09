import { VoluntaryModel } from '@/domain/models/voluntary';

export const LIST_VOLUNTARIES_REPOSITORY = 'LIST_VOLUNTARIES_REPOSITORY';

export interface IListVoluntariesRepository {
  load: () => Promise<VoluntaryModel[]>;
}
