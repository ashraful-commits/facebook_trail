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

  let TotalSecond = Math.floor(timeDiff / 1000);
  let Total_min = Math.floor(TotalSecond / 60);
  let TotalHour = Math.floor(Total_min / 60);
  let totalDay = Math.floor(TotalHour / 24);

  if (TotalSecond <= 59) {
    return `${TotalSecond} sec ago`;
  } else if (TotalSecond >= 60 && TotalSecond <= 3599) {
    return `${Total_min} min ago`;
  } else if (TotalSecond >= 3600 && TotalSecond <= 86399) {
    return `${TotalHour} hour ago`;
  } else if (TotalSecond >= 86400) {
    return `${totalDay} day ago`;
  }
};
