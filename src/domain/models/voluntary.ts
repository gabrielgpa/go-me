export type VoluntaryModel = {
  id?: any;
  name: string;
  email: string;
  available: boolean;
  raffles: any[];
};

export type AddVoluntaryParams = Omit<VoluntaryModel, 'id'>;
