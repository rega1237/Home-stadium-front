const redirectIfNotLogged = (user) => {
  if (user.token === undefined) {
    window.location.href = '/login';
  }
};

const misc = () => {

};

export {
  redirectIfNotLogged,
  misc,
};
