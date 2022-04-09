/* eslint-disable import/export */
import { Mapping, Adapter, Patch, Param, Body } from '@tsclean/core';

import {
  IMakeAvailableVoluntaryService,
  MAKE_AVAILABLE_VOTUNTATY_SERVICE,
} from '@/domain/use-cases/make-available-voluntary-service';

@Mapping('api/v1/voluntaries')
export class MakeAvailableVoluntaryController {
  constructor(
    @Adapter(MAKE_AVAILABLE_VOTUNTATY_SERVICE)
    private readonly makeAvailableVoluntaryService: IMakeAvailableVoluntaryService
  ) {}

  @Patch(':voluntaryId')
  async handle(
    @Param() voluntaryId: MakeAvailableVoluntaryController.Request,
    @Body() data: any
  ): Promise<any> {
    return this.makeAvailableVoluntaryService.makeAvailable(
      voluntaryId.voluntaryId,
      data
    );
  }
}

export namespace MakeAvailableVoluntaryController {
  export type Request = {
    voluntaryId: string | null;
  };
}
