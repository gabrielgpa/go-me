export type VoluntaryModel = {
  id: string | number;
  name: string;
  email: string;
  available: boolean;
};

export type AddVoluntaryParams = Omit<VoluntaryModel, 'id'>;
