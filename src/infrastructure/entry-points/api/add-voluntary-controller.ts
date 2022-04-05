import { AddVoluntaryParams, VoluntaryModel } from "@/domain/models/voluntary";
import { ADD_VOLUNTARY_SERVICE, IAddVoluntaryService } from "@/domain/use-cases/add-voluntary-service";
import {Mapping, Adapter, Post, Body} from "@tsclean/core";

@Mapping('api/v1/voluntaries')
export class AddVoluntaryController {

    constructor(
        @Adapter(ADD_VOLUNTARY_SERVICE) private readonly addVoluntaryService: IAddVoluntaryService
    ) {}
    
    @Post()
    async addUserController(@Body() data: AddVoluntaryParams): Promise<VoluntaryModel> {
        return await this.addVoluntaryService.addVoluntaryService(data);
    }
}
