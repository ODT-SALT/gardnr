import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

const initUser = {
  userId: 0,
  authId: "",
  name: "",
  email: "", 
  plants: [] 
}

import { getAllUserPlants } from "./api/dataManagement";
import { IPlant, IUser, IUserPlants } from "./interfaces";
import Homepage from "./pages/Homepage";
import { Link, Route, Routes } from "react-router-dom";
import { useCookies } from 'react-cookie';

import axios from "axios";
import Userpages from "./pages/Userpages";
import Header from "./components/Header";
import { Button } from "react-bootstrap";

export interface MyContextValue {
  plants: IPlant[];
  setPlants: Dispatch<SetStateAction<IPlant[]>>;
  userPlants: IUserPlants[];
  setUserPlants: Dispatch<SetStateAction<IUserPlants[]>>;
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
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
    plants: []
  }, 
  setUser: () => {}

});

function App() {

  const userId = 1;
  const [plants, setPlants] = useState<IPlant[]>([]);
  const [userPlants, setUserPlants] = useState<IUserPlants[]>([]);
  const [user, setUser] = useState<IUser>(initUser);
  

  useEffect(() => {
    axios.get(`http://localhost:8080/api/users`, { withCredentials: true }).then((response) => {
      setPlants(response.data);
    });
  }, []);


  return (
    <Context.Provider value={{ plants, setPlants, userPlants, setUserPlants, user, setUser }}>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<Userpages />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
