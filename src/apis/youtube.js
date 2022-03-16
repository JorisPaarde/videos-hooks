import axios from "axios";

const APIKEY = "AIzaSyCGSHZ1beO9hEdi8KobjezQwKFBcPrglLs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: APIKEY,
  },
});
