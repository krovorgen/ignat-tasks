export type LoadingDataType = {
  loading: boolean;
};

type LoadingActionType = {
  type: 'TOGGLE_LOADING';
};

const initState: LoadingDataType = {
  loading: false,
};

export const loadingReducer = (state = initState, action: LoadingActionType): LoadingDataType => {
  switch (action.type) {
    case 'TOGGLE_LOADING': {
      return {
        ...state,
        loading: !state.loading,
      };
    }
    default:
      return state;
  }
};

export const loadingAC = (): LoadingActionType => ({
  type: 'TOGGLE_LOADING',
});
