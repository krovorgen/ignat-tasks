export type ThemeType = 'dark' | 'red' | 'some';

type stateType = {
  theme: ThemeType;
};

const initState: stateType = {
  theme: 'dark',
};

export enum ThemeReducerType {
  CHANGE_THEME = 'CHANGE_THEME',
}

export const themeReducer = (
  state = initState,
  action: ReturnType<typeof changeThemeAC>,
): stateType => {
  switch (action.type) {
    case ThemeReducerType.CHANGE_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export const changeThemeAC = (theme: ThemeType) => ({
  type: ThemeReducerType.CHANGE_THEME,
  payload: theme,
});
