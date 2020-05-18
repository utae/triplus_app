export const SERVER_URL = 'http://13.124.0.65';
// export const SERVER_URL = 'http://localhost:8000';

export const login = SERVER_URL + '/rest-auth/login';
export const registration = SERVER_URL + '/rest-auth/registration';
export const logout = SERVER_URL + '/rest-auth/logout';

export const CITY_LIST = SERVER_URL + '/api/v1/city';

export const TRIP_INFO_LIST = SERVER_URL + '/api/v1/trip_info';
export const TRIP_INFO_DETAIL = (pk) => (SERVER_URL + '/api/v1/trip_info/'+ pk + '/details');

export const TRIP_PACKAGE_LIST = SERVER_URL + '/api/v1/trip_package';
export const TRIP_PACKAGE_DETAIL = (pk) => (SERVER_URL + '/api/v1/trip_package/'+ pk + '/details');