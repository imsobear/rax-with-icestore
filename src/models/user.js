const user = {
  state: {
    count: 20,
  },
  actions: {
    addCount(prevState, count) {
      return {
        ...prevState,
        count: prevState.count += count,
      };
    },
    async addCountAsync(prevState, count) {
      await new Promise((resolve) => setTimeout(resolve, 0.5 * 1000));
      return {
        ...prevState,
        count: prevState.count += count,
      };
    }
  }
}

export default user;