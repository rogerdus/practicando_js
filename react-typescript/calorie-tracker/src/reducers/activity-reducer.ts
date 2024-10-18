import { Activity } from '../types/index';


/// useReducer is a React Hook that lets you add a reducer to your component.
// example const [state, dispatch] = useReducer(reducer, { age: 42 });

export type ActivityActions =
    {type: 'save-activity', payload: { newActivity: Activity }
}
export type ActivityState = {
    activities: Activity[]
}

export const initialState: ActivityState = {
    activities: []
}
export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    if(action.type === 'save-activity'){
        /// maneja la logica para actualizar el estado
        console.log('desde el type de save-activity');
        return {
            ...state,
            activities: [...state.activities, action.payload.newActivity]
        }
    }
}