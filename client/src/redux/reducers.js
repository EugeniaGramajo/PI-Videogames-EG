import { data } from "../components/Landing/data";
import { ACTIVE_NAVBAR, COPY_GAMES, CREATED, CURRENT_PAGE, 
  DETAIL_GAMES, 
  GENRES_FILTER, GET_GENRES, GET_RANDOM_GAMES, GET_USER, GET_USERS, GET_VIDEOGAMES,
   LOG_OUT,
   ORIGINAL, PAGINATION_GAMES, PLATFORMS, RATING, 
   SEARCH, 
   SORT, 
   VALIDATE_USER} from "./actions";

const initialState = {
    showGames : [],
    copy:[],
    currentPage: 1,
    paginationGames:[],
    genres:[],
    platforms: [],
    user:"",
    notFound: false,
    navbar: false,
    detailGame:{},
    backgroundImages:[],
    genreFilter: true,
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case GET_VIDEOGAMES:
        return {...state, showGames: action.payload, copy:action.payload, notFound:false}
      case CURRENT_PAGE:
        return{
          ...state, currentPage:action.payload
        }
      case PAGINATION_GAMES:
        return{
          ...state, paginationGames:action.payload
        }
      case GET_GENRES:
        return{
          ...state, genres: action.payload
        }
      case GENRES_FILTER:
          const genre = state.showGames.filter(game => {
            return game.genres.some(genre => genre.name === action.payload);
          })
          if(genre.length===0){
            return{
              ...state, genreFilter: false,
            }
          }else{
        return{
          ...state, showGames: genre, genreFilter:true
        }}
      case ORIGINAL:
        return{
          ...state, showGames: action.payload
        }
      case CREATED:
        return{
          ...state, showGames: action.payload
        }
      case RATING:
        const ordered = action.payload === "asc" 
        ? [...state.showGames].sort((a, b) => a.rating - b.rating)
        : [...state.showGames].sort((a, b) => b.rating - a.rating);
        return{
          ...state, showGames: ordered
        }
      case SORT:
        const sortedGames = action.payload === 'asc'
        ? [...state.showGames].sort((a, b) => a.name.localeCompare(b.name))
        : [...state.showGames].sort((a, b) => b.name.localeCompare(a.name));
        return {
          ...state, showGames: sortedGames
        }
      case PLATFORMS:
        return{
          ...state, platforms: action.payload
        }
      case GET_USERS:
          return{
            ...state,
            users: action.payload
          }
      case VALIDATE_USER:
            return{
              ...state,
              user:action.payload
            }
      case LOG_OUT:
            return{
              ...state,
              user:""
            }
      case SEARCH:
        if(action.payload!=="Not Found"){
          return{
              ...state,
              showGames: action.payload,
              currentPage: 1
            }
        } else {
          return{
           ...state, notFound: true 
           , showGames: []
          }
          
        }
      case ACTIVE_NAVBAR:
          return{
            ...state,
            navbar: !state.navbar
          }
      case DETAIL_GAMES:
          return{
            ...state, 
            detailGame: action.payload
          }
      case GET_RANDOM_GAMES:
          const random = new Set()
          while (random.size < 16) {
            const randomIndex = Math.floor(Math.random() * data.length);
            const game = data[randomIndex];
            random.add(game);
          }
         const games = Array.from(random)
      return{
        ...state, backgroundImages:games
      }
      case GET_USER:
        return{
          ...state, user:action.payload
        }
      case COPY_GAMES:
        return {
          ...state, showGames: state.copy
        }
      default:
        return state;
    }
  }

  export default reducer;