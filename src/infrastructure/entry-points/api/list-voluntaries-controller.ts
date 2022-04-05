import { IListVoluntariesService, LIST_VOLUNTARIES_SERVICE } from "@/domain/use-cases/list-voluntaries-service";
import {Mapping, Get, Adapter} from "@tsclean/core";

@Mapping('api/v1/voluntaries')
export class ListVoluntariesController {

    constructor(
        @Adapter(LIST_VOLUNTARIES_SERVICE) private readonly listVoluntariesService: IListVoluntariesService
    ) {}
    
    @Get()
    async getWelcome(): Promise<any> {
        return await this.listVoluntariesService.listVoluntariesService();
    }
}
