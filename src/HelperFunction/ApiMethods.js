import axios from 'axios'
 export const getApiCalling=async function(endPoint){
  await  axios.get(endPoint)
    .then(function (response) {
      // handle success
        console.log(response);
      return({loading:false,response:response.data})
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      return({loading:false,response:error})
    })
    .then(function () {
      // always executed
      return({loading:false})
    });
}