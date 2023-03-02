import {useEffect, useState} from 'react';
const baseUrl = 'https://restcountries.com/v3.1/all';

const doFetch = async (url, options) => {
    const response = await fetch(url, options);
    const json = await response.json();
    if (!response.ok) {
      const message = json.error
        ? `${json.message}: ${json.error}`
        : json.message;
      throw new Error(message || response.statusText);
    }
    return json;
};
  
const useCountry = () => {

  const getCountries = async () => {
    try {
      return await doFetch(baseUrl);
    } catch (error) {
      throw new Error("getCountries, " + error.message);
    }
  };

  return {getCountries};
};


export {useCountry};