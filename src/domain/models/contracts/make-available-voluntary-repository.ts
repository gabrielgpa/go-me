import { VoluntaryModel } from '@/domain/models/voluntary';

export const MAKE_AVAILABLE_VOTUNTATY_REPOSITORY =
  'MAKE_AVAILABLE_VOTUNTATY_REPOSITORY';

export interface IMakeAvailableVoluntaryRepository {
  makeAvailable: (
    voluntaryId: string,
    data: IMakeAvailableVoluntaryRepository.Params
  ) => Promise<VoluntaryModel>;
}

export namespace IMakeAvailableVoluntaryRepository {
  export type Params = {
    available: boolean;
  };
}
