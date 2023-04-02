export const initUser = {
  userId: 0,
  authId: "",
  name: "",
  email: "", 
  listOfUserPlants: []
}

export const initPlant = {
  plantId: 0,
  plantName: "",
  plantNameLatin: "",
  watering: "",
  tempMax: "",
  tempMin: "",
  idealLight: "",
  description: "",
  pictureLink: ""
}

export const initUserPlant = {
  userPlantId: 0,
  startDate: new Date(),
  userPlantName: "",
  timeIncrement: 0,
  user: initUser,
  plant: initPlant
}