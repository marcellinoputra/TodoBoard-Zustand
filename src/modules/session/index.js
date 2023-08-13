// function setSession(key, value) {
//   const keys = JSON.parse(sessionStorage.getItem(key) || '{}');
//   sessionStorage.setItem(
//     key,
//     JSON.stringify({
//       ...keys,
//       ...value,
//     })
//   );
// }

// function getSession(key) {
//   const item = sessionStorage.getItem(key);
//   if (item) {
//     return JSON.parse(item);
//   }
//   return null;
// }

// function removeSession(key) {
//   sessionStorage.removeItem(key);
// }

// module.exports = {
//   setSession,
//   getSession,
//   removeSession,
// };

const session = {
  set: function (key, value) {
    const keys = JSON.parse(sessionStorage.getItem(key));
    sessionStorage.setItem(
      key,
      JSON.stringify({
        ...keys,
        ...value,
      })
    );
  },

  get: function (key) {
    const item = sessionStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  },

  remove: function (key) {
    sessionStorage.removeItem(key);
  },
};

export default session;
