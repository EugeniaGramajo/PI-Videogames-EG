export const validateUsername = (username)=>{
    const regex = /^[a-z]{6,10}$/
   return regex.test(username)
}

export const validatePassword = (password)=>{
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,10}$/
    return regex.test(password)
}

export const validateName = (name) => {
    if (!name) {
      return "Name can't be empty";
    }
    if (name.length > 20) {
      return "Name can't have more than 20 characters";
    }
    return "";
  };

  export const validateSummary = (summary) => {
    if (summary.length < 10 || summary.length > 100) {
      return "Summary must be between 10 and 100 characters";
    }
    return "";
  };

  export const validatePlatforms = (platforms) => {
    if (platforms.length === 0) {
      return "Need to choose at least one platform";
    }
    return "";
  };

  export const validateRating = (rating) => {
    if(!rating){return "Rating can't be empty"}else
    if (rating < 0 || rating > 5) {
      return "Rating needs to be higher than 0 and lower than 5";
    }
    return "";
  };

  export const validateReleaseDate = (released) => {
    if (!released) {
      return "Release date can't be empty";
    }
    return "";
  };
  
  export const validateGenres = (genres) => {
    if (genres.length === 0) {
      return "Need to choose at least one genre";
    }
    return "";
  };

  export const validateDate = (date) => {
    console.log("date", date)
    if(date.length===0){return "Date can't be empty"}else{
     const input = new Date(date)
    const today = new Date()
    const limit = new Date("1952-01-01")
        console.log(input, today,limit)
    if(input>limit && input <=today){
        return ""
    }else{
        return "The release is not valid"
    }   
    }

    
  }