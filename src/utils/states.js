const TODO_STATE = 'Todo';
const IN_PROGRESS_STATE = 'In Progress';
const COMPLETED_STATE = 'Done';

export const Directions = {
    FORWARD: 'forward',
    BACK: 'back',
  }

class States {

    constructor() {
        this.states = [];
        this.states.push({ name: TODO_STATE, prev: null, next: IN_PROGRESS_STATE });
        this.states.push({ name: IN_PROGRESS_STATE, prev: TODO_STATE, next: COMPLETED_STATE });
        this.states.push({ name: COMPLETED_STATE, prev: IN_PROGRESS_STATE, next: null });
    }

    getNextFor(state) {
        const next = this.states.find(item => {
            console.log(item);
            return item.prev === state.status;
        });
        if(!next) throw new Error('Cannot find next status for status ' + state.status);
        return next.name;
    }

    getPrevFor(state) {
        const prev = this.states.find(item => item.next === state.status);
        if(!prev) throw new Error('Cannot find prev status for status ' + state.status);
        return prev.name;
    }
}

const states = new States();

export const getNextStateFor = (state, direction) => {
    return direction == Directions.FORWARD ? states.getNextFor(state) : states.getPrevFor(state);
}