let section_navigation = document.querySelectorAll("section");
let tag_navigation = document.getElementById("navbar_header");
let section_count = section_navigation.length;

// The show function to show section whilst scrolling 
function show(sectionID) {
	window.scrollTo(0, sectionID);
}

// build the nav bar from emtpy <ul> "navbar_header"
// arrow function
// The action below allows to reach to the section by clicking in the menu/ navgation bar
// 1. Loop to all the section
// 2. Add section to menu bar
section_navigation.forEach((element, index) => {
	let section_name = element.getAttribute("data-nav");
	let off_section = element.offsetTop - 50;
	// Add menu bar to empty <ul> using <li>
	let li = document.createElement("li");
	li.setAttribute("class", "menu_link" + index);
	li.innerHTML = `<a onClick="show(${off_section})">${section_name}</a>`;
	tag_navigation.appendChild(li);
});

function set_remove_active(){
	currentPosition = this.scrollY;
	// Section Positions
	let section_positions = [];
	section_navigation.forEach((element) => section_positions.push(element.getBoundingClientRect().top - 50));

	// Adding and removing active sections
	let addIndex = section_positions.findIndex((element) => element > 0);
	console.log(addIndex)
	for (let i = 0; i < section_count; i++) {
		if (addIndex === i) 
		{
			// 1. Add "active" to the current section
			// 2. Add "active" class to the Nav link which have a class same as id of the current section
			document.querySelector(".menu_link" + addIndex).classList.add("active");
			document.querySelector(`#story${addIndex}`).classList.add("active");
		} 
		else 
		{
			// 1. Remove "active" from the current section.
			// 2. Remove "active" class from the Nav link which have a class same as id of current section
			document.querySelector(".menu_link" + i).classList.remove("active");
			document.querySelector(`#story${i}`).removeAttribute("class");
		}
	}
}
document.addEventListener("scroll",function(){set_remove_active();});