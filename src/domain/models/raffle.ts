export type RaffleModel = {
  id?: any;
  type: RaffleModel.RaffleTypeModel | string;
  voluntary: any;
  createdAt: Date;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export namespace RaffleModel {
  export enum RaffleTypeModel {
    DAILY,
  }
}

export type AddRaffleParams = Omit<RaffleModel, 'id'>;
