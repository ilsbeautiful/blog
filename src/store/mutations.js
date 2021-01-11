export default {
  increment(state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  },
  getusername(state, payload) {
    state.info.name = payload
  }
}