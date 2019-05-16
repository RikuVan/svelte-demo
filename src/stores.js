import { writable, derived, readable } from 'svelte/store'
// import { produce } from 'immer'
// import { of } from 'rxjs'

export const a = writable({ value: 1 })
export const b = writable({ value: 2 })

export const sum = derived([a, b], ([$a, $b]) => $a.value + $b.value)

/*
export function immerStore(value) {
  const { set, update, subscribe } = writable(value);
  
  return {
    set,
    update: fn => update(n => produce(n, fn)),
    subscribe
  };
}
*/

/*
 function fromObservable(observable) {
  return readable(null, set => {
    const subscription = observable.subscribe(set)
    return () => void subscription.unsubscribe()
  })
}
export rxStore = fromObservable(of(1))
*/

function storeFromActions(actions, initial) {
  const state = writable(initial)

  const mappedActions = Object.keys(actions).reduce((acc, actionName) => {
    acc[actionName] = payload => state.update(state => actions[actionName](payload, state))
    return acc
  }, {})
  return { subscribe: state.subscribe, actions: mappedActions }
}

const actions = {
  show: (payload, state) => ({ ...state, data: payload, open: true }),
  close: (_payload, state) => ({ ...state, data: null, open: false })
}

const x = storeFromActions(actions, {})
