/**
 * Created by michael.anderson on 3/21/16.
 */

const defaultState = {
    scores: [{
        score: 0
    }]
};

const scores = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD':
        case 'SUBSTRACT':
            if (action.index && action.scoreDelta) {
                return Object.assign({}, state, {
                    scores: [
                        ...state.scores.slice(0, action.index),
                        Object.assign({}, state.scores[action.index], {
                            score: state.scores[action.index] + action.scoreDelta
                        }),
                        ...state.scores.slice(action.index + 1)
                    ]
                });
            }
            return state;
        default:
            return state;
    }
};

export default scores;
