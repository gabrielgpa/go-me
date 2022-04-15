import { AddRaffleController } from '@/infrastructure/entry-points/api/add-raffle-controller';
import { AddVoluntaryController } from '@/infrastructure/entry-points/api/add-voluntary-controller';
import { ListVoluntariesController } from '@/infrastructure/entry-points/api/list-voluntaries-controller';
import { LoadRaffleByIdController } from '@/infrastructure/entry-points/api/load-raffle-by-id-controller';
import { MakeAvailableVoluntaryController } from '@/infrastructure/entry-points/api/make-available-voluntary-controller';
import { RemoveVoluntaryController } from '@/infrastructure/entry-points/api/remove-voluntary-controller';

export const controllers = [
  AddVoluntaryController,
  ListVoluntariesController,
  MakeAvailableVoluntaryController,
  RemoveVoluntaryController,
  AddRaffleController,
  LoadRaffleByIdController,
];
