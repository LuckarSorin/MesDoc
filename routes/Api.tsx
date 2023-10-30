import axios from 'axios';

export const fetchMedoc = async () => {
  try {
    const response = await axios.get('http://10.49.35.219:3000/api/v1/medicaments');
    //console.log(response.data.data)
    return response.data.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    return null;
  }
};

export const fetchMedicamentList = async (liste, symptome, allergie) => {
  try {
    const response = await axios.get(`http://10.49.35.219:3000/api/v1/medicamentlist?liste=${liste}&symptome=${symptome}&allergie=${allergie}`);
    console.log("reponse api : "+typeof(response.data.liste) +" "+ response.data.liste[0]);
    return response.data.liste
  } catch (error) {
    console.error('Error fetching data: ', error);
    return null;
  }
};

export const fetchMedecin = async (texte) => {
    try {
      const response = await axios.get(`http://10.49.35.219:3000/api/v1/medecin?texte=${texte}`);
      console.log("reponse api : "+JSON.stringify(response.data.data));
      return JSON.parse(response.data.data)
    } catch (error) {
      console.error('Error fetching data: ', error);
      return null;
    }
  };

export const fetchDoctorList = async (texte) => {
    try {
      const response = await axios.get(`http://10.49.35.219:3000/api/v1/docteurs?texte=${texte}`);
      // console.log("reponse api : "+JSON.stringify(response));
      return response.data.data
    } catch (error) {
      console.error('Error fetching data: ', error);
      return null;
    }
  };
  