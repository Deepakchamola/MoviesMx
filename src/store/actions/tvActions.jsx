export { removeTv } from "../reducers/tvSlice";
import axios from "../../utils/Axios";
import { loadTV } from "../reducers/tvSlice";

export const asyncLoadTv = (id) => async (dispatch, getState) => {
  try {
    const details = await axios.get(`/tv/${id}`);
    const externalId = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const translations = await axios.get(`/tv/${id}/translations`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const watchProvider = await axios.get(`/tv/${id}/watch/providers`);
    let allDetails = {
      details: details.data,
      externalId: externalId.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      translations: translations.data.translations.map((t) => t.english_name),
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      watchProvider: watchProvider.data.results.IN,
    };
    dispatch(loadTV(allDetails));
  } catch (error) {
    console.log("Error ", error);
  }
};
