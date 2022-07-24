const facbook_form = document.getElementById("facbook_form");
const msg = document.querySelector(".msg");
const output = document.getElementById("output");
const loadding = document.querySelector(".loadding");
const loadding_save = document.querySelector(".loadding_save");

const allData = (e) => {
  let lsData = getItem("facebook");
  let list = "";
  let date = new Date();
  // console.log(lsData)
  if (!lsData || lsData == "") {
    list = `<h2 class="text-center p-2">No post</h2>`;
  }

  if (lsData) {
    lsData.map((item, index) => {
      list += `<li class="my-2 shadow list-group-item">
            <div class="d-flex justify-content-between align-items-center ">
            <div  class="d-flex align-items-center justify-content-start ">
                <img  style="width: 70px;height:70px" src="${
                  item.user_photo
                }" alt="user" class=" p-3 border-1 border-dark rounded rounded-circle me-2">
                <div class=" mt-4 d-flex flex-column justify-content-start text-start">
                 <p class="mb-0">${item.user_name}</p>
                 <p class="web_p">${timeCounter(
                   item.post_time
                 )} <i class="fa-solid fa-earth-americas"></i></p>
                </div>
            </div>
    
              <div class="dropdown dropdown-menu-start">
                <button class="btn btn-secondary dropdown-toggle btn-group dropstart" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-ellipsis"></i>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item view" serial="${index}" href="#">View</a></li>
                    <li><a class="dropdown-item edit"  serial="${index}" href="#"  data-bs-target="#edit_form" data-bs-toggle="modal">Edit</a></li>
                    <li><a class="dropdown-item delete"  serial="${index}" href="#">Delete</a></li>
                </ul>
                </div>
            </div>
            <p class="text-field text-start">${item.heading}</p>
            <div class="m-1">
                <img src="${item.photo}" alt="" class="w-100 h-100 p-2">
            </div>
            
            <div class="m-1 d-flex justify-content-around">
                <div class="count">
                    <p >Like <span id="like">0</span></p>
                </div>
                <div class="comment">
                    <p id="comment">comment 0</p>
                </div>
                <div class="share">
                    <p id="share">share 0</p>
                </div>
            </div>
            <div class="hr">
                <hr>
            </div>
            <div class="lowerfield d-flex justify-content-around p-2">
                <div class="like"><button class="btn btn-outline-primary border-0"><i class="fas fa-thumbs-up" ></i></button></div>
                <div class="comment"><button class="btn btn-outline-primary border-0"><i class="fas fa-comment" ></i></button></div>
                <div class="share"><button  class="btn btn-outline-primary border-0"><i class="fas fa-share" ></i></button></div>
            </div>
            </li>
            `;
    });
  }
  output.innerHTML = list;
};

allData();

// form submit

facbook_form.addEventListener("submit", (e) => {
  e.preventDefault();

  let form_value = new FormData(e.target);
  let form_data = Object.fromEntries(form_value.entries());
  let postTime = {
    post_time: Date.now(),
  };
  let finalData = {
    ...form_data,
    ...postTime,
  };
  let { heading, photo, user_name, user_photo } = form_data;
  if (!heading || !photo || !user_name || !user_photo) {
    msg.innerHTML = setAlert("All fields are required");
  } else {
    loadding.style.display = "block";
    loadding.style.opacity = "1.5";
    e.target.style.opacity = ".5";
    setTimeout(() => {
      loadding.style.display = "none";
      e.target.style.opacity = "1";
      setDataLs("facebook", finalData);
      allData();
      e.target.reset();
    }, 1000);
  }
});

output.onclick = (e) => {
  e.preventDefault();

  if (e.target.classList.contains("delete")) {
    let index = e.target.getAttribute("serial");
    let lsdata_delete = getItem("facebook");
    lsdata_delete.splice(index, 1);
    updataLsData("facebook", lsdata_delete);
    allData();
  }
  if (e.target.classList.contains("edit")) {
    let index = e.target.getAttribute("serial");
    let lsdata_edit = getItem("facebook");
    const user_i = document.getElementById("user_i");
    const user_n = document.getElementById("user_n");
    const heading_edit = document.getElementById("heading_edit");
    const poto_edit = document.getElementById("photo");
    const user_name_edit = document.getElementById("user_name");
    const user_photo_edit = document.getElementById("user_photo");
    let { heading, photo, user_name, user_photo } = lsdata_edit[index];

    user_i.src = user_photo;
    user_n.innerHTML = user_name;
    heading_edit.value = heading;
    poto_edit.value = photo;
    user_name_edit.value = user_name;
    user_photo_edit.value = user_photo;
    console.log(index);
    facbook_edit.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(index);
      let form_value = new FormData(e.target);
      let form_data = Object.fromEntries(form_value.entries());
      let { heading, photo, user_name, user_photo } = form_data;

      if (!heading || !photo || !user_name || !user_photo) {
        msg.innerHTML = setAlert("All fields are required");
      } else {
        e.target.style.opacity = ".3";
        loadding_save.style.opacity = "1";
        loadding_save.style.display = "block";
        setTimeout(() => {
          e.target.style.opacity = "1";
          loadding_save.style.display = "none";
          lsdata_edit[index] = {
            heading,
            photo,
            user_name,
            user_photo,
            post_time: Date.now(),
          };
          updataLsData("facebook", lsdata_edit);
          e.target.reset();
          allData();
        }, 1000);
      }
    });
  }
};
