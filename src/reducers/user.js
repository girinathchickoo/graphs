export var initialState = {
  users: [],
};
export default function user(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case "Users":
      return {
        users: action.payload,
      };
    default:
      return state;
  }
}
