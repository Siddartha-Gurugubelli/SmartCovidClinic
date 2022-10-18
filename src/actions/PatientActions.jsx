import axios from "axios";


export const getAppointmentByEmailAction = (email) =>(dispatch) =>{
    axios.get(`http://localhost:8080/patient/getByEmail/${email}`)
    .then((res)=>{
        console.log(res);
        dispatch({
            type: "GET_APPOINTMENT_BY_EMAIL",
            payload:res.data,
        });
    })
    .catch((error)=>{
        console.log(error.response.data.message);
        dispatch({
            type:"ERR_RES",
            payload:error.response.data.message,
        });
    });
};