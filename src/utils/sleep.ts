//for simulation purposes only
const sleep = (interval: number) => {
  return new Promise((res) => {
    setTimeout(() => res(""), interval);
  });
};

export default sleep;
