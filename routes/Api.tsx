import axios from 'axios';

export const fetchMedoc = async () => {
  try {
    const response = await axios.get('http://192.168.0.104:3000/api/v1/medicaments');
    console.log(response.data.data)
    return response.data.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    return null;
  }
};


export const fetchMedecin = async (texte) => {
    try {
      const response = await axios.post('http://192.168.0.104:3000/api/v1/medecin', { texte });
      console.log(response.data.data);
      return(response.data.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
      return null
    }
  };