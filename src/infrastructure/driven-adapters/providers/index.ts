import { ADD_RAFFLE_REPOSITORY } from '@/domain/models/contracts/add-raffle-repository';
import { ADD_VOLUNTARY_REPOSITORY } from '@/domain/models/contracts/add-voluntary-repository';
import { LIST_VOLUNTARIES_REPOSITORY } from '@/domain/models/contracts/list-voluntaries-repository';
import { LOAD_RAFFLE_BY_ID_REPOSITORY } from '@/domain/models/contracts/load-raffle-by-id-repository';
import { MAKE_AVAILABLE_VOTUNTATY_REPOSITORY } from '@/domain/models/contracts/make-available-voluntary-repository';
import { REMOVE_VOLUNTARY_REPOSITORY } from '@/domain/models/contracts/remove-voluntary-repository';
import { ADD_RAFFLE_SERVICE } from '@/domain/use-cases/add-raffle-service';
import { ADD_VOLUNTARY_SERVICE } from '@/domain/use-cases/add-voluntary-service';
import { AddRaffleServiceImpl } from '@/domain/use-cases/impl/add-raffle-service-impl';
import { AddVoluntaryServiceImpl } from '@/domain/use-cases/impl/add-voluntary-service-impl';
import { ListVoluntariesServiceImpl } from '@/domain/use-cases/impl/list-voluntaries-service-impl';
import { LoadRaffleByIdServiceImpl } from '@/domain/use-cases/impl/load-raffle-by-id-service-impl';
import { MakeAvailableVoluntaryServiceImpl } from '@/domain/use-cases/impl/make-available-voluntary-service-impl';
import { RemoveVoluntaryServiceImpl } from '@/domain/use-cases/impl/remove-voluntary-service-impl';
import { LIST_VOLUNTARIES_SERVICE } from '@/domain/use-cases/list-voluntaries-service';
import { LOAD_RAFFLE_BY_ID_SERVICE } from '@/domain/use-cases/load-raffle-by-id-service';
import { MAKE_AVAILABLE_VOTUNTATY_SERVICE } from '@/domain/use-cases/make-available-voluntary-service';
import { REMOVE_VOLUNTARY_SERVICE } from '@/domain/use-cases/remove-voluntary-service';
import { RaffleMongooseRepositoryAdapter } from '@/infrastructure/driven-adapters/adapters/orm/mongoose/raffle-mongoose-repository-adapter';
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
  {
    provide: REMOVE_VOLUNTARY_REPOSITORY,
    useClass: VoluntaryMongooseRepositoryAdapter,
  },
  {
    provide: ADD_RAFFLE_REPOSITORY,
    useClass: RaffleMongooseRepositoryAdapter,
  },
  {
    provide: LOAD_RAFFLE_BY_ID_REPOSITORY,
    useClass: RaffleMongooseRepositoryAdapter,
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
  {
    provide: REMOVE_VOLUNTARY_SERVICE,
    useClass: RemoveVoluntaryServiceImpl,
  },
  {
    provide: ADD_RAFFLE_SERVICE,
    useClass: AddRaffleServiceImpl,
  },
  {
    provide: LOAD_RAFFLE_BY_ID_SERVICE,
    useClass: LoadRaffleByIdServiceImpl,
  },
];
