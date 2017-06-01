console.log("Week 8 Homework main.js!");

// data about our slideshow.
// in a real website, this would come from a database, it wouldn/t just be hard-coded into this JS file.
var slides = [
	{full_size_filename: "assets/img/slide1.jpg", thumbnail_filename: "assets/img/slide1-thumbnail.jpg", title: "An image 1"},
	{full_size_filename: "assets/img/slide2.jpg", thumbnail_filename: "assets/img/slide2-thumbnail.jpg", title: "An image 2"},
	{full_size_filename: "assets/img/slide3.jpg", thumbnail_filename: "assets/img/slide3-thumbnail.jpg", title: "An image 3"},
	{full_size_filename: "assets/img/slide4.jpg", thumbnail_filename: "assets/img/slide4-thumbnail.jpg", title: "An image 4"},
	{full_size_filename: "assets/img/slide5.jpg", thumbnail_filename: "assets/img/slide5-thumbnail.jpg", title: "An image 5"},
	{full_size_filename: "assets/img/slide6.jpg", thumbnail_filename: "assets/img/slide6-thumbnail.jpg", title: "An image 6"},
]

// get the big elements and save for reuse.
var $thumbnailsDiv = document.querySelector(".thumbnails");// the thumbnails div

var $slideshowDiv = document.querySelector(".slideshow"); // the slideshow div

// loop through the slides array of objects above

for (var i = 0; i < slides.length; i++) {
	slides[i];

	// create an image element in a variable called $newThumbnail
	var $newThumbnail = document.createElement("img");
	// give it a src attribute, pulling the right filename from the slides array of objects 
	$newThumbnail.src = slides[i].thumbnail_filename;
	// insert it into the $thumbnailsDiv div
	document.body.appendChild($newThumbnail)

}// end of loop


// create an image element in a variable called $slide
var $newSlide = document.createElement("img") 
// give it a src attribute, pulling the FIRST filename from the slides array of objects 
$newSlide.src = slides[0].full_size_filename;
// insert it into the $slideshowDiv div
$slideshowDiv.appendChild($newSlide);


