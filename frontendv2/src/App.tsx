import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { getAllUserPlants } from "./api/dataManagement";
import { IPlant, IUser, IUserPlants } from "./interfaces";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import DatePicker from "react-datepicker";
import axios from "axios";
import Userpages from "./pages/Userpages";
import Header from "./components/Header";
import { useAuth0 } from "@auth0/auth0-react";

const initUser = {
  userId: 0,
  authId: "",
  name: "",
  email: "", 
  listOfUserPlants: []
}

const initPlant = {
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

const initUserPlant = {
  userPlantId: 0,
  startDate: new Date(),
  userPlantName: "",
  timeIncrement: 0,
  user: initUser,
  plant: initPlant
}

export interface MyContextValue {
  plants: IPlant[];
  setPlants: Dispatch<SetStateAction<IPlant[]>>;
  userPlants: IUserPlants[];
  setUserPlants: Dispatch<SetStateAction<IUserPlants[]>>;
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
  specificPlant: IUserPlants;
  setSpecificPlant: Dispatch<SetStateAction<IUserPlants>>;
  toggleShowSpecificPlant: boolean;
  setToggleShowSpecificPlant: Dispatch<SetStateAction<boolean>>;
  authenticated: boolean;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
}

export const Context = createContext<MyContextValue>({
  plants: [],
  setPlants: () => {},

  userPlants: [],
  setUserPlants: () => {},

  user: {
    userId: 0,
    authId: "",
    name: "",
    email: "", 
    listOfUserPlants: []
  }, 
  setUser: () => {},

  specificPlant: {
    userPlantId: 0,
    startDate: new Date(),
    userPlantName: "",
    timeIncrement: 0,
    user: initUser,
    plant: initPlant
  },
  setSpecificPlant: () => {},

  toggleShowSpecificPlant: false,
  setToggleShowSpecificPlant: () => {},

  authenticated: false,
  setAuthenticated: () => {}

});

function App() {
  const userId = 1;
  const [plants, setPlants] = useState<IPlant[]>([]);
  const [userPlants, setUserPlants] = useState<IUserPlants[]>([]);
  const [user, setUser] = useState<IUser>(initUser);
  const [specificPlant, setSpecificPlant] = useState<IUserPlants>(initUserPlant);
  const [toggleShowSpecificPlant, setToggleShowSpecificPlant] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

   useEffect(() => {
    getAccessTokenSilently().then(token => {
      console.log("token: ", token)
      fetch(`http://localhost:8080/api/plants`, { 
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => res.json())
      .then(data => setPlants(data))
      .catch(err => console.log("error getching plants: ",err));
    })
  }, []);

  return (
    <Context.Provider value={{ 
      plants, setPlants, 
      userPlants, setUserPlants, 
      user, setUser, 
      specificPlant, setSpecificPlant, 
      toggleShowSpecificPlant, setToggleShowSpecificPlant,   
      authenticated, setAuthenticated
      }}>
      <Header/>
      <Routes>
          <Route path="/:id" element={<Userpages />} />
          <Route path="/" element={<Homepage />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
