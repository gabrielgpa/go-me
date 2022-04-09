export const REMOVE_VOLUNTARY_SERVICE = 'REMOVE_VOLUNTARY_SERVICE';

export interface IRemoveVoluntaryService {
  remove: (voluntaryId: string) => Promise<any>;
}
