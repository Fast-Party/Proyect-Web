import axios from "axios";

// import {URL_OBTENER_FIESTAS} from "../../api/urls";

export const obtenerFiestas = async (lat, long, dtNow) => {
    
    try {
        // Hacer la solicitud GET a la API utilizando Axios
        const response = await axios.post('http://212.227.227.190:3000/getPartiesWeb', {
            // Agregar parámetros de consulta si es necesario
            lat: lat,
            lon: long,
            now: dtNow  
        });

        if (response.data.length > 0) {
            return response;
        } else {
            console.log("No hay datos para la consulta");
            return [];
        }
    } catch (error) {
        // Manejar errores de la solicitud
        console.error("Error al obtener fiestas:", error);
        throw error; // Puedes manejar el error de otra manera si lo prefieres
    }
};
