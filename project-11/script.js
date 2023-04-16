window.onload = function () {
  appShows.init();
};

let appShows = {
  data: null,
  inputSearch: null,
  dataSection: null,
  init: function () {
    console.log("app start");

    this.inputSearch = document.getElementById("search-input");

    this.dataSection = document.querySelector(".data-section");
    this.dataLoad("friends");

    this.inputSearch.addEventListener("keyup", (e) => {
      if (e.keyCode == 13) {
        console.log("en");
        this.dataLoad(this.inputSearch.value);
      }
    });
  },
  dataLoad: function (str) {
    fetch("https://api.tvmaze.com/search/shows?q=" + str.trim())
      .then((response) => response.json())
      .then((data) => this.dataReady(data));
  },

  dataReady: function (showData) {
    this.data = showData;

    let allBoxHtml = "";
    for (let i = 0; i < showData.length; i++) {
      let show = showData[i];
      let score = show.score;
      show = show.show;
      let category = show.genres.join(", ");
      let scrImg = null;
      let imgSrcOriginal = null;
      if (show.image) {
        scrImg = show.image.medium;
        imgSrcOriginal = show.image.original;
      } else {
        scrImg =
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmatthewjamestaylor.com%2Fempty-tags&psig=AOvVaw2O5DzrN4FXQ0_8B8QuvpFb&ust=1681728821006000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOCLopuerv4CFQAAAAAdAAAAABAD.jpg";
        imgSrcOriginal =
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmatthewjamestaylor.com%2Fempty-tags&psig=AOvVaw2O5DzrN4FXQ0_8B8QuvpFb&ust=1681728821006000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOCLopuerv4CFQAAAAAdAAAAABAD.jpg";
      }
      let showTitle = null;
      if (!show.name) continue;
      showTitle = show.name;
      let network = "-";
      if (show.netowrk) network = show.netowrk.name;
      let officalSite = "- ";
      if (show.officalSite) officalSite = show.officalSite;
      let premiered = "-";
      if (show.premiered) premiered = show.premiered;

      let summary = show.summary;

      summary =
        `
      <p>Show: ${showTitle}</p>
      <p>Date: ${premiered}</p>
      <p>Network: ${network}</p>
      
      ` + summary;
      console.log(summary);
      allBoxHtml += this.getShowBoxByTemplate(
        scrImg,
        showTitle,
        category,
        summary
      );
    }

    this.dataSection.innerHTML = allBoxHtml;
  },

  getShowBoxByTemplate: function (scrImg, title, category, description) {
    return `
<div class="box-show">
          <img src="${scrImg}" alt="" />
          <div class="show-title">${title}</div>
          <div class="show-category">${category}</div>
          <div class="show-description">${description}</div>
        </div>
`;
  },
};
