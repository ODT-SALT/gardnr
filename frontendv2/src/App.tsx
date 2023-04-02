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
import { initUser, initUserPlant } from "./helper/initializer";
import { Context } from "./helper/context";

function App() {
  const userId = 6;
  const [plants, setPlants] = useState<IPlant[]>([]);
  const [userPlants, setUserPlants] = useState<IUserPlants[]>([]);
  const [user, setUser] = useState<IUser>(initUser);
  const [specificPlant, setSpecificPlant] = useState<IUserPlants>(initUserPlant);
  const [toggleShowSpecificPlant, setToggleShowSpecificPlant] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/plants`).then((response) => {
      setPlants(response.data);
    });
  }, []);

  return (
    <Context.Provider value={{ plants, setPlants, userPlants, setUserPlants, user, setUser, specificPlant, setSpecificPlant, toggleShowSpecificPlant, setToggleShowSpecificPlant  }}>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<Userpages />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
