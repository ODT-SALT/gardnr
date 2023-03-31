package se.salt.gardnr.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import se.salt.gardnr.plant.Plant;
import se.salt.gardnr.userplant.UserPlant;
import se.salt.gardnr.userplant.UserPlantRepository;
import se.salt.gardnr.userplant.UserPlantService;
import se.salt.gardnr.plant.NotFoundException;


import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository repo;

    @Autowired
    UserPlantRepository userPlantRepository;

    @Autowired
    UserPlantService userPlantService;


    public User getUserById(int id) {
        return repo.getUserById(id);
    }

    public User createNewUser(OAuth2User userauth) {
        return repo.createNewUser(userauth);
    }

    public User findUserByAuthId(String authid) {
        return repo.findUserByAuthId(authid);
    }

//    public UserPlant getUserPlantByUserId(int id){
//        return userPlantRepository.getUserPlantByUserId(id);
//    }

    public UserPlant createNewUserPlant(int id, Plant plant) throws NotFoundException {
        UserPlant newUserPlant = new UserPlant();
        newUserPlant.setPlant(plant);
        newUserPlant.setStartDate(LocalDateTime.now());
        User user = getUserById(id);
        newUserPlant.setUser(user);
        UserPlant up = userPlantRepository.addNewUserPlant(newUserPlant);
        int increment = userPlantService.setTimeIncrement(up.userPlantId, plant);
        up.setTimeIncrement(increment);
        userPlantRepository.addNewUserPlant(up);
        return up;
    }

    public UserPlant updateUserPlant(int userPlantId, UserPlant userPlant) {
        UserPlant upToUpdate = userPlantRepository.getUserPlantById(userPlantId);
        if(userPlant.getUserPlantName() != null && userPlant.getUserPlantName() != "")
            upToUpdate.setUserPlantName(userPlant.getUserPlantName());
        if(userPlant.getStartDate() != null )
            upToUpdate.setStartDate(userPlant.getStartDate());

        UserPlant up = userPlantRepository.addNewUserPlant(upToUpdate);
        return up;
    }

    public void deleteUserPlant(int userPlantId) {
        userPlantRepository.deleteUserPlant(userPlantId);
    }


    //  public User getUserByAuthId(String authId) {
//        return repo.getUserByAuthId(authId);
//    }
}
