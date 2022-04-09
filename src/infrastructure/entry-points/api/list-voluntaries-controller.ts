import { Mapping, Get, Adapter } from '@tsclean/core';

import {
  IListVoluntariesService,
  LIST_VOLUNTARIES_SERVICE,
} from '@/domain/use-cases/list-voluntaries-service';

@Mapping('api/v1/voluntaries')
export class ListVoluntariesController {
  constructor(
    @Adapter(LIST_VOLUNTARIES_SERVICE)
    private readonly listVoluntariesService: IListVoluntariesService
  ) {}

  @Get()
  async handle(): Promise<any> {
    return this.listVoluntariesService.load();
  }
}
