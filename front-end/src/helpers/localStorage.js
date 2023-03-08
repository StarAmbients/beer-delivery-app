export const setUserLocalStorage = (data) => {
  localStorage.setItem('user', JSON.stringify({ ...data }));
};

// export const getUserLocalStorage = () => {
//   const localStorageGET = JSON.parse(localStorage.getItem('user'));
//   return localStorageGET;
// };

export const getUserLocalStorage = () => {
  const localStorageGET = JSON.parse(localStorage.getItem('user'));
  if (localStorageGET == null) { // verifica se localStorageGET é nulo ou indefinido
    return {}; // retorna um objeto vazio como valor padrão
  }
  return localStorageGET;
};

export const removeUserLocalStorage = () => {
  localStorage.removeItem('user');
};
