export { removeMovie } from "../reducers/movieSlice";
import axios from "../../utils/Axios";
import { loadMovie } from "../reducers/movieSlice";

export const asyncLoadMovie = (id) => async (dispatch, getState) => {
  try {
    const details = await axios.get(`/movie/${id}`);
    const externalId = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const translations = await axios.get(`/movie/${id}/translations`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const watchProvider = await axios.get(`/movie/${id}/watch/providers`);
    let allDetails = {
      details: details.data,
      externalId: externalId.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      translations: translations.data.translations.map((t) => t.english_name),
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      watchProvider: watchProvider.data.results.IN,
    };
    dispatch(loadMovie(allDetails));
  } catch (error) {
    console.log("Error ", error);
  }
};
