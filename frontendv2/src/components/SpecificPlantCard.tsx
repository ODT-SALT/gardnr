import React, { useContext, useEffect, useState } from "react";
import { Context } from "../App";
import { IPlant, IUserPlants } from "../interfaces";
import { removePlant, updateUserPlant } from "../api/dataManagement";
import { Alert } from "@mui/material";


const SpecificPlantCard = () => {
  const {
    plants,
    setPlants,
    userPlants,
    setUserPlants,
    user,
    setUser,
    specificPlant,
    setSpecificPlant,
    toggleShowSpecificPlant,
  } = useContext(Context);


  const [timer, setTimer] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [isPlantTime, setIsPlantTime] = useState(false);
 // const [currSeverity, setCurrSetverity] = useState(true)

  const listOfPlants: IUserPlants[] = user.listOfUserPlants;

  const stringDate =   specificPlant  && specificPlant.startDate;
  const timeIncrement = specificPlant &&  specificPlant.startDate && specificPlant.timeIncrement;

  const showWateringTime = () => {
    console.log("setting timer")

    const nowDay = new Date().getDate();
    const startDay = new Date(stringDate).getDate();
  
    const nowHour = new Date().getHours();
    const startHour = new Date(stringDate).getHours();

// var eventStartTime = new Date(stringDate);
// var eventEndTime = new Date();
// var duration = eventEndTime.valueOf() - eventStartTime.valueOf();

// console.log("uration time:", new Date(duration).getDate(), new Date(duration).getHours());

// console.log("duration:", duration);
  
    let daysLeft = 0;
    let hoursLeft = 0;

// daysLeft = timeIncrement - new Date(duration).getDate();
// hoursLeft = 24 - new Date(duration).getHours();

    let timeRemaining: number = (nowDay - startDay) % timeIncrement;

     if (nowDay == startDay) {
       timeRemaining = 3//timeIncrement;
       hoursLeft = timeRemaining;
     }

     hoursLeft = Math.abs(startHour - nowHour); 

     if (hoursLeft < 3 && hoursLeft > 0) {
      setIsPlantTime(true);
     } else {
      hoursLeft = 3;
      setIsPlantTime(false);
     }
    // console.log("tinerennainfi:", timeRemaining);

    // daysLeft = Math.abs(nowDay - (startDay + timeIncrement));
    // hoursLeft = Math.abs(startHour - nowHour); 

    // if (timeIncrement == 1) {
    //   daysLeft = 0;
    //   hoursLeft = 3//23;
    // }

    // if (daysLeft == timeIncrement) {
    //   daysLeft -= 1;
    //   hoursLeft = 3//23;
    // }

    // if (timeRemaining != 0) {
    //   //daysLeft = timeIncrement -1;
    //   setIsPlantTime(false);
    // } else {
    //   setIsPlantTime(true);
    // }

    // if (timeIncrement == 1) {
    //   setIsPlantTime(true);
    //   daysLeft = 0;
    //   hoursLeft = 2;
    // }

    // if (daysLeft == timeIncrement) {
    //   daysLeft = daysLeft - 1;
    //   setIsPlantTime(false);
    // }

    // console.log("daysLeft:", daysLeft);
    // console.log("hoursLeft:", hoursLeft);
    // console.log("timeIncremnent:", timeIncrement);
    // console.log("isPlantTime:", isPlantTime);

     return hoursLeft +"h" //"" + daysLeft + "d: " + hoursLeft + "h:"; 
  };

  const deletePlant = () => {
    if (specificPlant) {
      removePlant(user.userId, specificPlant.userPlantId);
      const updatedPlantList = listOfPlants.filter(e => e.userPlantId != specificPlant.userPlantId)
      user.listOfUserPlants = updatedPlantList;
      setUser(JSON.parse(JSON.stringify(user)))
      setSpecificPlant(null);
    }
  };

  const refreshTime = () => {
      specificPlant.startDate = new Date();
      specificPlant ?  updateUserPlant(user.userId, specificPlant) : null;
      setSpecificPlant(JSON.parse(JSON.stringify(specificPlant)));
  }

  useEffect(() => {
    if (user)
    setTimer(showWateringTime());
  }, [specificPlant, user, isPlantTime]);

  specificPlant ? console.log("this is startdate",specificPlant.startDate) : null; 

  if(specificPlant == null){return <p> There are no plants!</p>}

  return (
    <div className="specific-plant-card">
      <img
        className="specific-plant-img"
        src={specificPlant && specificPlant.plant.pictureLink}
        alt={specificPlant && specificPlant.userPlantName}
      />
      {//toggleShowSpecificPlant
         specificPlant && (
            <>
              <ul className="specific-plant-card-list">
                <li key={1}>Name: {specificPlant.userPlantName}</li>
                <li key={2}>
                  Ideal lighting: {specificPlant.plant.idealLight}
                </li>
                <li key={4}>Max temperature: {specificPlant.plant.tempMax}</li>
                <li key={5}>
                  Min temperature: {specificPlant.plant.tempMin}
                </li>
                <li key={6}>suggested watering every {timeIncrement} day(s)</li>
                <li
                  className={
                    isPlantTime
                      ? "orange specific-plant-time-bg"
                      : "green specific-plant-time-bg"
                  }
                  id="plant-time"
                  style={
                    {
                      // backgroundColor: "rgba(157, 255, 127, 0.615)",
                    }
                  }>
                 { isPlantTime ? 
                 <Alert severity="error" onClick={refreshTime}>Fresh water in: ({timer})</Alert> 
                 : 
                 <Alert severity="success" onClick={refreshTime}>Fresh water in: ({timer})</Alert>}
                </li>
              </ul>
            </>
          )
        }
      <div className="specific-plant-card-break"></div>
      <img
        src="trashcan.svg"
        className="specific-plant-card-trashcan"
        onClick={deletePlant}
      />
    </div>
  );
};

export default SpecificPlantCard;
