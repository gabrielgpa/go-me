import { Container } from '@tsclean/core';

import { services, adapters } from '@/infrastructure/driven-adapters/providers';
import { controllers } from '@/infrastructure/entry-points/api';

@Container({
  providers: [...services, ...adapters],
  controllers: [...controllers],
})
export class AppContainer {}
