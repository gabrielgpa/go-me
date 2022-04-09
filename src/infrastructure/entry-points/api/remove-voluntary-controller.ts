/* eslint-disable import/export */
import { Mapping, Adapter, Delete, Param } from '@tsclean/core';

import { RemoveVoluntaryServiceImpl } from '@/domain/use-cases/impl/remove-voluntary-service-impl';
import { REMOVE_VOLUNTARY_SERVICE } from '@/domain/use-cases/remove-voluntary-service';

@Mapping('api/v1/voluntaries')
export class RemoveVoluntaryController {
  constructor(
    @Adapter(REMOVE_VOLUNTARY_SERVICE)
    private readonly removeVoluntaryService: RemoveVoluntaryServiceImpl
  ) {}

  @Delete(':id')
  async handle(@Param('id') id: string): Promise<any> {
    return this.removeVoluntaryService.remove(id);
  }
}
