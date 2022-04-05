import {Adapter, Service} from "@tsclean/core";
import {IListVoluntariesService} from "@/domain/use-cases/list-voluntaries-service";
import { IListVoluntariesRepository, LIST_VOLUNTARIES_REPOSITORY } from "@/domain/models/contracts/list-voluntaries-repository";
import { VoluntaryModel } from "@/domain/models/voluntary";

@Service()
export class ListVoluntariesServiceImpl implements IListVoluntariesService {
    constructor(
        @Adapter(LIST_VOLUNTARIES_REPOSITORY) private readonly listVoluntariesRepository: IListVoluntariesRepository
    ) {}

    async listVoluntariesService(): Promise<VoluntaryModel[]> {
        return await this.listVoluntariesRepository.listVoluntariesRepository();
    }
}