const { NODE_ENV } = process.env;
const BASE_URL = NODE_ENV === 'mongodb://localhost:27017/communaldb';
export default BASE_URL;
