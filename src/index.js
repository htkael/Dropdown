import "./styles.css";

class Dropdown {
  constructor(title, options = []) {
    this.title = title;
    this.options = options;
    this.isOpen = false;
    this.dropDownElement = this.createDropDown();
  }

  createDropDown() {
    // create Dropdown container
    const dropDown = document.createElement("div");
    dropDown.classList.add("dropDown");

    // create Dropdown title
    const button = document.createElement("button");
    button.classList.add("dropButton");
    button.setAttribute("aria-expanded", "false");

    button.addEventListener("click", () => {
      this.toggleDropDown();
    });

    const span = document.createElement("span");
    span.classList.add("dropDownText");
    span.textContent = `${this.title}`;

    button.append(span);
    dropDown.append(button);

    // create ul for options
    const optionList = document.createElement("ul");
    optionList.classList.add("options");

    // create options list and append
    this.options.forEach((option) => {
      const item = document.createElement("li");
      item.classList.add("listItem");
      item.textContent = option;

      item.addEventListener("click", () => {
        this.selectOption(option);
      });

      optionList.append(item);
    });

    optionList.style.display = "none";
    dropDown.append(optionList);
    this.optionList = optionList;

    document.addEventListener("click", (event) => {
      if (!dropDown.contains(event.target)) {
        this.closeDropDown();
      }
    });

    return dropDown;
  }

  toggleDropDown() {
    this.isOpen = !this.isOpen;
    this.optionList.style.display = this.isOpen ? "grid" : "none";
    this.updateAria();
  }

  closeDropDown() {
    this.isOpen = false;
    this.optionList.style.display = "none";
    this.updateAria();
  }

  updateAria() {
    const button = this.dropDownElement.querySelector(".dropButton");
    button.setAttribute("aria-expanded", this.isOpen);
  }

  // placeholder for handling selection
  selectOption(option) {
    console.log(`Selected option: ${option}`);
    this.closeDropDown();
  }

  // method to append to parent element
  appendTo(parent) {
    parent.append(this.dropDownElement);
  }
}

const one = new Dropdown("Hello", ["one", "two", "three"]);
const body = document.querySelector("body");
one.appendTo(body);
