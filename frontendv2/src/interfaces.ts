export interface IPlant {
  plantId: number;
  plantName: string;
  plantNameLatin: string;
  watering: string;
  tempMax: string;
  tempMin: string;
  idealLight: string;
  description: string;
  pictureLink: string;
}

export interface IUser {
  userId: number;
  name: string;
  email: string;
  listOfUserPlants: IUserPlants[];
}

export interface IUserPlants {
  userPlantId: number;
  startDate: Date;
  userPlantName: string;
  timeIncrement: number;
  user: IUser;
  plant: IPlant;
}

export interface IUserPlantToUpdate {
  userPlantName: string;
  startDate: Date;
}
