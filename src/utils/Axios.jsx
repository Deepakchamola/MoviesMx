import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTQ0NjQxNTE1MzM2NDExMzViZTM2ZDhjYTY4NzRkNyIsIm5iZiI6MTczNzY0MTg2Ni44MDgsInN1YiI6IjY3OTI0ZjhhNDA1YmQ3OGI3ZjQ3MDk4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ogNgLkZT-OhIpgdhbR6qPmW19A0KlgFiRrpfIzA_4e0',
  }
});

export default instance;