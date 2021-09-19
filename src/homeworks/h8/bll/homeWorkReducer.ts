import { SortPeopleActionType, UserType } from '../HW8';

export const homeWorkReducer = (state: UserType[], action: SortPeopleActionType): UserType[] => {
  switch (action.type) {
    case 'sort': {
      if (action.payload === 'up') {
        return [...state].sort((a, b) => b.age - a.age);
      }
      if (action.payload === 'down') {
        return [...state].sort((a, b) => a.age - b.age);
      }
      if (action.payload === 'majority') {
        return [...state.filter((item) => item.age >= 18).sort((a, b) => b.age - a.age)];
      }
      return state;
    }
    default:
      return state;
  }
};
