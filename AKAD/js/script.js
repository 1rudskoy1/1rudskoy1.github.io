// tags and category on page blog

function tabUp(clases, active){
	let tabs = document.querySelectorAll(clases);
	let classActive = active;
	for (i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener("click", function(e){
			if(e.target.classList.contains(classActive) === false){
				for(let j = 0; j < tabs.length; j++){
					tabs[j].classList.remove(classActive);
				}
					e.target.classList.add(classActive);
			}	
		});
	}	
}
tabUp(".Tags__all-tags_tag", "tags-active");
tabUp(".Posts__categories_category", "category-active");


//Slide on page about

function slide(classes, target){
	let slides = document.querySelectorAll(classes);
	let tabs = document.querySelectorAll(target);
	let i = 0;
	for (i = 1; i <slides.length;i++){
		slides[i].style.display = " none";
	}
	for (i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener("click", function(e){
			if(e.target.classList.contains("dots__dot_active") === false){
				for(let j = 0; j < tabs.length; j++){
					tabs[j].classList.remove("dots__dot_active");
					slides[j].style.display = "none";
				}
					e.target.classList.add("dots__dot_active");
					slides[$(e.target).index()].style.display = "block";

			}	
		});
	}	
}
slide(".testimonials__content", ".dots__dot");

