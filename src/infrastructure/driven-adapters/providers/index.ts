import { ADD_VOLUNTARY_REPOSITORY } from '@/domain/models/contracts/add-voluntary-repository';
import { LIST_VOLUNTARIES_REPOSITORY } from '@/domain/models/contracts/list-voluntaries-repository';
import { MAKE_AVAILABLE_VOTUNTATY_REPOSITORY } from '@/domain/models/contracts/make-available-voluntary-repository';
import { ADD_VOLUNTARY_SERVICE } from '@/domain/use-cases/add-voluntary-service';
import { AddVoluntaryServiceImpl } from '@/domain/use-cases/impl/add-voluntary-service-impl';
import { ListVoluntariesServiceImpl } from '@/domain/use-cases/impl/list-voluntaries-service-impl';
import { MakeAvailableVoluntaryServiceImpl } from '@/domain/use-cases/impl/make-available-voluntary-service-impl';
import { LIST_VOLUNTARIES_SERVICE } from '@/domain/use-cases/list-voluntaries-service';
import { MAKE_AVAILABLE_VOTUNTATY_SERVICE } from '@/domain/use-cases/make-available-voluntary-service';
import { VoluntaryMongooseRepositoryAdapter } from '@/infrastructure/driven-adapters/adapters/orm/mongoose/voluntary-mongoose-repository-adapter';

export const adapters = [
  {
    provide: ADD_VOLUNTARY_REPOSITORY,
    useClass: VoluntaryMongooseRepositoryAdapter,
  },
  {
    provide: LIST_VOLUNTARIES_REPOSITORY,
    useClass: VoluntaryMongooseRepositoryAdapter,
  },
  {
    provide: MAKE_AVAILABLE_VOTUNTATY_REPOSITORY,
    useClass: VoluntaryMongooseRepositoryAdapter,
  },
];

export const services = [
  {
    provide: ADD_VOLUNTARY_SERVICE,
    useClass: AddVoluntaryServiceImpl,
  },
  {
    provide: LIST_VOLUNTARIES_SERVICE,
    useClass: ListVoluntariesServiceImpl,
  },
  {
    provide: MAKE_AVAILABLE_VOTUNTATY_SERVICE,
    useClass: MakeAvailableVoluntaryServiceImpl,
  },
];
