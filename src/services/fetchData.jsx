// Import axios
import axios from "axios";

// Make a function to get the data
const getCharacters = async () => {
    let data = [];

    let url = "https://rickandmortyapi.com/api/character";
    // Make a request then use the "next" property to get the next page
    // then push the results into the "characters" array
    // until there are no more pages
    while (url) {
        const response = await axios.get(url);
        data = data.concat(response.data.results);
        url = response.data.info.next;
    }

    // Return the data
    return data;
};

// Export the function
export default getCharacters;
