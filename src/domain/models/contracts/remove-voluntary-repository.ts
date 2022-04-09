export const REMOVE_VOLUNTARY_REPOSITORY = 'REMOVE_VOLUNTARY_REPOSITORY';

export interface IRemoveVoluntaryRepository {
  remove: (voluntaryId: string) => Promise<any>;
}
