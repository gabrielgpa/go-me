export type VoluntaryModel = {
  id?: any;
  name: string;
  email: string;
  available: boolean;
};

export type AddVoluntaryParams = Omit<VoluntaryModel, 'id'>;
