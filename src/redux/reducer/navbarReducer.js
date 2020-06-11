import ava1 from "../../resources/ava1.jpg";
import ava2 from "../../resources/ava2.jpg";
import ava3 from "../../resources/ava3.jpg";

const initialState = {
    friends: [
        {id: 1, name: "Artyom", photo: ava1},
        {id: 2, name: "Nastya", photo: ava2},
        {id: 3, name: "Igor", photo: ava3}
    ]
};

const navbarReducer = (state = initialState, action) => {
    return state;
};

export default navbarReducer;