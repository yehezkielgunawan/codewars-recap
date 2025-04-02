// challenge: https://www.codewars.com/kata/57873ab5e55533a2890000c7/train/javascript
function timeCorrect(timestring) {
	if (!timestring) {
		return timestring;
	}

	const splittedTimeString = timestring.split(":");
	let hourString = Number(splittedTimeString[0]);
	let minuteString = Number(splittedTimeString[1]);
	let secondsString = Number(splittedTimeString[2]);

	if (!hourString || !minuteString || !secondsString) {
		return null;
	}

	if (secondsString > 60) {
		secondsString -= 60;
		minuteString++;
	}

	if (minuteString >= 60) {
		minuteString -= 60;
		hourString++;
	}

	while (hourString >= 24) {
		hourString -= 24;
	}

	return `${hourString < 10 ? `0${hourString.toString()}` : hourString}:${minuteString < 10 ? `0${minuteString.toString()}` : minuteString}:${secondsString < 10 ? `0${secondsString.toString()}` : secondsString}`;
}
