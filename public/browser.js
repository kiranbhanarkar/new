document.addEventListener("click", function (event) {
  if (target.classList.contains("delete-me")) {
    const id = event.target.getAttribute("data-id");
    console.log(id)
    axios
      .post("/delete-item", { id })
      .then((res) => {
        if (res.data.status !== 200) {
          alert(res.data.message);
          return;
        }
        event.target.parentElement.parentElement.remove();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}); 

window.onload = function () {
    genrateTodos();
  };
  
  function genrateTodos() {
    axios
      .get("/read-item")
      .then((res) => {
        console.log(res.data.data);
        const libraryData = res.data.data;
  
        document.getElementById("ul").insertAdjacentHTML(
          "beforeend",
          libraryData
            .map((item) => {
              return `<li class="card" style="width: 12rem; height: 18rem; margin: 10px; ">
              <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${item.author}</h6>
                <p class="card-text">${item.category}</p>
                <h4 class="card-price">₹ ${item.price}</h4>
            
              </div>
            </li>`;
            })
            .join("")
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }