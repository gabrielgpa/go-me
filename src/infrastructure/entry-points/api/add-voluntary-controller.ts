import { Mapping, Adapter, Post, Body } from '@tsclean/core';

import { AddVoluntaryParams, VoluntaryModel } from '@/domain/models/voluntary';
import {
  ADD_VOLUNTARY_SERVICE,
  IAddVoluntaryService,
} from '@/domain/use-cases/add-voluntary-service';

@Mapping('api/v1/voluntaries')
export class AddVoluntaryController {
  constructor(
    @Adapter(ADD_VOLUNTARY_SERVICE)
    private readonly addVoluntaryService: IAddVoluntaryService
  ) {}

  @Post()
  async handle(@Body() data: AddVoluntaryParams): Promise<VoluntaryModel> {
    return this.addVoluntaryService.add(data);
  }
}
