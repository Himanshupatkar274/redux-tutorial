import { Add_TO_CART, REMOVE_TO_CART } from "../constants"

const initialState = {
  cardData: [],
};

export default function cardItem(state=[], action) {
  switch (action.type) {
    case Add_TO_CART:
      return [
        ...state,
        {cardData:action.data}
      ];
    case REMOVE_TO_CART:
      const updateData = state.filter(item => item.cardData.price !== action.data.price || item.cardData.name !== action.data.name);
      return updateData
    default:
        return state
  }
}
