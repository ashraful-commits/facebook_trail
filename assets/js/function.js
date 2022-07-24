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

// timeCounter function

const timeCounter = (postTime) => {
  let currentTime = Date.now();
  let timeDiff = currentTime - postTime;

  let totalSecond = Math.floor(timeDiff / 1000);
  let totalMin = Math.floor(totalSecond / 60);
  let totalHour = Math.floor(totalMin / 60);
  let totalDay = Math.floor(totalHour / 24);

  if (totalSecond <= 60) {
    return `${totalSecond} s`;
  } else if (totalSecond > 60) {
    return `${totalMin} m`;
  } else if (totalMin > 60) {
    return `${totalHour} h`;
  } else if (totalHour > 24) {
    return `${totalDay} d`;
  } else {
    return `old post`;
  }
};
