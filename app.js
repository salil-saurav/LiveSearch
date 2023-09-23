const categorySelect = document.getElementById("categorySelect");
const categoryDivs = document.querySelectorAll(".category-container");
const categoryInput = document.getElementById("categoryInput");
const selectContainer = document.querySelector(".select-container");
const body = document.body;
// const loadMoreButton = document.querySelectorAll(".load-more");

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
      categoryInput.value = newValue;
    });
  });
}

populateSelectOptions(); // options Added

const selectedOptions = Array.from(categorySelect.options).map(
  (option) => option.value
);

const loweredSelectedOptions = [
  ...selectedOptions.map((option) => option.toLowerCase()),
];

const filtered = loweredSelectedOptions.includes(categoryInput.value);
console.log(filtered);

// showing the select container when categoryInput value changes

const categoryOptions = Array.from(categorySelect.options);

categoryInput.addEventListener("input", () => {
  selectContainer.classList.remove("d-none");
  selectContainer.classList.add("d-flex");

  //  displaying all div when input value is falsy
  if (!categoryInput.value) {
    categoryDivs.forEach((div) => div.classList.remove("d-none"));
  }

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
