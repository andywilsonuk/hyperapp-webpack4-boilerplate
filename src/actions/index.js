export default {
  startup: () => (_state, actions) => {
	  return actions.add();
  },
  add: (/* event (e) */) => ({ num }) => ({ num: num + 1 }),
  sub: (/* event (e) */) => ({ num }) => ({ num: num - 1 }),
};
