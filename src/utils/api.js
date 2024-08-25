import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_Token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWVmNjhhN2E3NzM0OGMzNjQxNzc1YWU5YmUzZWZlNyIsInN1YiI6IjY0Yzc0ZTVkMzBmNzljMDBhZThlMGZjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FHT2cJOrKB-Ux6woOVWMD-yEwJqoUhoILovB4oxlJaU";   

const headers = {
    Authorization: "bearer " + TMDB_Token,
};

export const fetchDataFromApi = async (url, params) => {
    try{
        const { data } = await axios.get(BASE_URL + url,{
            headers,
            params,
        })
        return data;
    }catch (err){
        console.log(err);
        return err;
    }
}
