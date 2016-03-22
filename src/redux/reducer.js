/**
 * Created by michael.anderson on 3/21/16.
 */

const defaultState = {
    scores: [{
        score: 0
    }]
};

const defaultScore = {
    score: 0
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
        case 'ADD_SCOREBOX':
            const startingScore = action.score || 0;
            return Object.assign({}, state, {
                scores: [
                    ...state.scores,
                    Object.assign({}, defaultScore, {
                        score: startingScore
                    })
                ]
            });
        case 'REMOVE_SCOREBOX':
            if (action.index) {
                return Object.assign({}, state, {
                    scores: [
                        ...state.scores.slice(0, action.index),
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
