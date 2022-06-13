import { AboutResponse } from '../store/store';

export const getAboutData = async (): Promise<AboutResponse> => {
  const myRequest = new Request('./data/about.json', {
    method: 'GET',
  });

  const response = await fetch(myRequest);
  const data = await response.json();

  return data;
};
