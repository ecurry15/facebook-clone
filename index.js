const headerSearch = document.querySelector('.header__logo-search');
const headerSearchDropDown = document.getElementById('header__search-dropDown');
const searchDropDownArrow = document.getElementById('search-dropDown__arrow');
const searchDropdownInput = document.querySelector('.search-dropDown__input');
const searchDropDownIcon = document.getElementById('search-dropDown__icon fas fa-search');
const groupsSuggested = document.getElementById('groupsSuggested');
const groupsSuggestedInfoClose = document.getElementById('groupsSuggestedInfoClose');

const closeDropDown = () => {
  headerSearchDropDown.style.display = "none";
}

headerSearch.addEventListener('click', function() {
  headerSearchDropDown.style.display = "flex";
  searchDropdownInput.focus();
  searchDropdownInput.style.paddingLeft = "20px";
  searchDropDownIcon.style.display = "none";
  dropDownIsOpen = true;
})

window.addEventListener('click', function(e) {
  const isDropDown = e.target.matches('[data-dropDown]');
  const isSearchBar = e.target.matches('[data-search-bar]');
  if (!isDropDown && !isSearchBar) {
closeDropDown();
  } 
    })


searchDropDownArrow.addEventListener('click', closeDropDown)

headerSearchDropDown.addEventListener('click', function (e) {
 if (e.target.className != "search-dropDown__input") {
  searchDropdownInput.style.paddingLeft = "40px";
  searchDropDownIcon.style.display = "flex";
 } else {
  searchDropdownInput.style.paddingLeft = "20px";
  searchDropDownIcon.style.display = "none";
 }
})

groupsSuggestedInfoClose.addEventListener('click', function() {
  groupsSuggested.style.display = "none";
})