const categorySelect = document.getElementById("categorySelect");
const categoryDivs = document.querySelectorAll(".category-container");
const categoryInput = document.getElementById("categoryInput");
const selectContainer = document.querySelector(".select-container");
const body = document.body;
// const loadMoreButton = document.querySelectorAll(".load-more");

// loadMoreButton.forEach((btn) => {
//   btn.addEventListener("click", () => {});
// });

body.addEventListener("click", () => {
  selectContainer.classList.add("d-none");
  selectContainer.classList.remove("d-flex");
});

// Adding all options to select element with all avaialble categories

function populateSelectOptions() {
  categoryDivs.forEach((div) => {
    const category = div.querySelector("h1").innerText;
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);

    categoryInput.addEventListener("input", (evt) => {
      let inputValue = evt.target.value;
      if (inputValue === option.value) {
        option.selected = inputValue;
      }
    });

    option.addEventListener("click", (evt) => {
      let newValue = evt.target.value;
      console.log(newValue);
      categoryInput.value = newValue;
    });
  });
}

populateSelectOptions(); // options Added

// showing the select container when categoryInput value changes

const categoryOptions = Array.from(categorySelect.options);

categoryInput.addEventListener("input", () => {
  selectContainer.classList.remove("d-none");
  selectContainer.classList.add("d-flex");

  //  displaying all div when input value is falsy

  if (!categoryInput.value) {
    categoryDivs.forEach((div) => div.classList.remove("d-none"));
  }

  // console.log(categorySelect.options.innerHTML);
  const searchText = categoryInput.value.trim().toLowerCase();

  categorySelect.innerHTML = "";

  // Filter the original options based on the search text
  const filteredOptions = categoryOptions.filter((option) =>
    option.textContent.toLowerCase().includes(searchText)
  );

  // Add the filtered options back to the select element
  filteredOptions.forEach((option) => {
    categorySelect.appendChild(option.cloneNode(true));
  });
});

//

const avaialableOptions = async () => {
  const avaialableOptionsArray = Array.from(categorySelect.options);

  const inputValue = categoryInput.value.trim().toLowerCase();

  if (inputValue === avaialableOptionsArray)
    avaialableOptionsArray.forEach((option) => console.log(option));
};

avaialableOptions();

// Event listener for select change
categorySelect.addEventListener("change", function () {
  const selectedCategory = this.value;

  // Hide all category divs
  categoryDivs.forEach((div) => {
    div.classList.add("d-none");
  });

  // Show the selected category div
  if (selectedCategory) {
    categoryDivs.forEach((div) => {
      const category = div.querySelector("h1").innerText;

      if (selectedCategory === category) {
        div.classList.remove("d-none");
        categoryInput.value = selectedCategory;
      }
    });
  }
});

categoryDivs.forEach((div, index) => {
  if (index >= 3) {
    div.classList.add("d-none");
  }
});

//
