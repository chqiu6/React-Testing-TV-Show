import axios from "axios";

// // fetchShow.js
// export const fetchShow = () => {
//   return axios.get
//     .then(res => return res) // or res.data, however you want to set that up
// }

// export const fetchShow = () => {
//     axios
//       .get(
//         "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
//       )
//       .then(res => {
//         setShow(res.data);
//         setSeasons(formatSeasons(res.data._embedded.episodes));
//       });
//   };
//   fetchShow();
// }

export const fetchShow = () => {
  return axios
  .get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
  .then(res => {
    console.log("fetchShow api res data :", res);
    return res;
  })
  .catch(err =>{ 
    console.log("fetchShow err msg :", err);
  })
}