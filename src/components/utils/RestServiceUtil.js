import ApiConstant from './ApiConstant';
import axios from 'axios';

export function getBlockProfiles(profileId) {
    axios.get(ApiConstant.BLOCKED_PROFILE_LIST+profileId, {                
    })
    .then((res) => {
        console.log(res);
        console.log(res.data);            
      return res.data;
        
    }) .catch((error) => {
        console.log(error);      
        return error;    
    });
}

export function blockProfile(profileId, blockedProfileId) {
    axios.put(ApiConstant.BLOCKED_PROFILE+profileId+"?blockedProfileId="+blockedProfileId, {                
    })
    .then((res) => {
        console.log(res);
        console.log(res.data);            
      return res.data;
        
    }) .catch((error) => {
        console.log(error);      
        return error;    
    });
}
