import { VoluntaryModel } from '@/domain/models/voluntary';

export const LIST_VOLUNTARIES_SERVICE = 'LIST_VOLUNTARIES_SERVICE';

export interface IListVoluntariesService {
  listVoluntariesService: () => Promise<VoluntaryModel[]>;
}
