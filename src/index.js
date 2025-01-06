import "./styles.css";

const dropDowns = document.querySelectorAll(".dropDown");

dropDowns.forEach((dropDown) => {
  const button = dropDown.querySelector(".dropDownText");
  const list = dropDown.querySelector(".list");

  const expandDropDown = (drop) => {
    if (drop.style.display === "none" || !drop.style.display) {
      drop.style.display = "grid";
    } else {
      drop.style.display = "none";
    }
  };

  button.addEventListener("click", () => {
    expandDropDown(list);
  });

  document.addEventListener("click", (event) => {
    if (!dropDown.contains(event.target)) {
      list.style.display = "none";
    }
  });
});
