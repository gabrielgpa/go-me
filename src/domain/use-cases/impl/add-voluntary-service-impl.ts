import {Service, Adapter} from "@tsclean/core";
import {IAddVoluntaryService} from "@/domain/use-cases/add-voluntary-service";
import {VoluntaryModel, AddVoluntaryParams} from "@/domain/models/voluntary";
import {ADD_VOLUNTARY_REPOSITORY, IAddVoluntaryRepository} from "@/domain/models/contracts/add-voluntary-repository";

@Service()
export class AddVoluntaryServiceImpl implements IAddVoluntaryService {
    constructor(
        @Adapter(ADD_VOLUNTARY_REPOSITORY) private readonly addVoluntaryRepository: IAddVoluntaryRepository
    ) {}

    async addVoluntaryService(data: AddVoluntaryParams): Promise<VoluntaryModel> {
        return await this.addVoluntaryRepository.addVoluntaryRepository(data);
    }
}