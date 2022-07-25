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

  if (totalSecond <= 59) {
    return `${totalSecond} sec ago`;
  }
  if (totalSecond <= 60 || totalSecond <= 3599) {
    return `${totalMin} min ago`;
  }
  if (totalSecond >= 3600 || totalSecond <= 86399) {
    return `${totalHour} hour ago`;
  }
  if (totalSecond >= 86400) {
    return `${totalDay} day ago`;
  }
};
