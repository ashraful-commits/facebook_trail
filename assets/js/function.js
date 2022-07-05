const setAlert = (msg, type = "danger") => {
  return `<h5 class="alert alret-${type}">${msg}</h5>`;
};

const setDataLs = (key, value) => {
  let data = [];
  if (localStorage.getItem(key)) {
    data = JSON.parse(localStorage.getItem(key));
  }

  data.push(value);
  localStorage.setItem(key, JSON.stringify(data));
};

const updataLsData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getItem = (key) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return false;
  }
};
