export type VoluntaryModel = {
  id: string | number;
  name: string;
  email: string;
};

export type AddVoluntaryParams = Omit<VoluntaryModel, 'id'>;
