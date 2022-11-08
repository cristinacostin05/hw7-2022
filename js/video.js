var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector('#player1');
	video.autoplay = false;
	video.loop = false;
	video.load()
	console.log("Autoplay is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);

});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	// play video
	video.play();
	// update volume information
	document.getElementById("volume").innerHTML = document.getElementById("slider").value + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	// Pause the video
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	// Slow the current video speed by 10% each time the button is clicked 
	video.playbackRate = video.playbackRate - 0.1; 
	// Log the new speed to the console.  
	console.log(video.playbackRate);

	
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");

	video.playbackRate = video.playbackRate + 0.1;
	// Log the new speed to the console.  
	console.log(video.playbackRate);


});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;

	}else{
		video.currentTime = video.currentTime + 10; 
	}
	console.log(video.currentTime);
	


});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	if (video.muted == true){
		video.muted = false
		document.getElementById("mute").innerHTML = "Mute"
	}else{
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute"
	}

});

document.querySelector("#slider").addEventListener("slidestop", function() {
	// TODO -- does this still user click
	console.log("Volume Slider");
	video.volume = document.getElementById("slider").value;
	document.getElementById("volume").innerHTML = document.getElementById("slider").value + "%"

});

// Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
});


// Remove the oldSchool class from the video.
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
});

