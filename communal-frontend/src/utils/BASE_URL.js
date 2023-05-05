const { NODE_ENV } = process.env;

const BASE_URL =
  NODE_ENV === 'production'
    ? 'mongodb://localhost:27017/communaldb'
    : 'http://localhost:4000/communalcard';

		export default BASE_URL;