function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var oneMinute = 60,
        display = document.querySelector('#time');
    startTimer(oneMinute, display);
};
// document.addEventListener('DOMContentLoaded', function(){
// 	var deskStretches = [
// 		'https://www.washingtonpost.com/graphics/health/workout-at-work/media/lineup1.mp4',
// 		'https://www.washingtonpost.com/graphics/health/workout-at-work/media/lineup2.mp4',
// 		'https://www.washingtonpost.com/graphics/health/workout-at-work/media/lineup3.mp4',
// 		'https://www.washingtonpost.com/graphics/health/workout-at-work/media/lineup4.mp4',
// 		'https://www.washingtonpost.com/graphics/health/workout-at-work/media/lineup5.mp4',
// 		'https://www.washingtonpost.com/graphics/health/workout-at-work/media/lineup6.mp4',
// 		'https://www.washingtonpost.com/graphics/health/workout-at-work/media/lineup7.mp4',
// 		'https://www.washingtonpost.com/graphics/health/workout-at-work/media/lineup8.mp4',
// 		'https://www.washingtonpost.com/graphics/health/workout-at-work/media/lineup9.mp4',
// 		'https://www.washingtonpost.com/graphics/health/workout-at-work/media/lineup10.mp4',
// 		'https://www.washingtonpost.com/graphics/health/workout-at-work/media/lineup11.mp4',
// 		'https://www.washingtonpost.com/graphics/health/workout-at-work/media/lineup12.mp4'
// 	];
// 	function changeVideo(){
// 		for(var i = 0; i < deskStretches.length; i++){
// 			document.getElementById('workoutVideo')
// 		}
// 	}
	
// })

// var notification = webkitNotifications.createNotification(
//   'icon.png',
//   'Free your eyes',
//   'Please take a break'
// );

// function showNotify()
// {
//   notification.show();
// }

// setInterval(showNotify(), 2000);

// //song link
// //https://p.scdn.co/mp3-preview/c92d00fb3c8e2a38b201d4366938f8fb1b2d8235

// var vid = document.getElementById("workoutVideo");

// function enableLoop() { 
//   vid.loop = true;
//   vid.load();
// } 
