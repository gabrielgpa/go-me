import { VoluntaryModel } from '@/domain/models/voluntary';

export const MAKE_AVAILABLE_VOTUNTATY_SERVICE =
  'MAKE_AVAILABLE_VOTUNTATY_SERVICE';

export interface IMakeAvailableVoluntaryService {
  makeAvailableVoluntarySevice: (
    voluntaryId: string,
    data: IMakeAvailableVoluntaryService.Params
  ) => Promise<VoluntaryModel>;
}

export namespace IMakeAvailableVoluntaryService {
  export type Params = {
    available: boolean;
  };
}
