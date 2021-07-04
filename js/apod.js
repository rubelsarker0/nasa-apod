const url = 'https://api.nasa.gov/planetary/apod?api_key=';
const apiKey = config.NASA_API_KEY;

const fetchNasaApodData = async () => {
	try {
		const response = await fetch(`${url}${apiKey}`);
		const data = await response.json();
		displayData(data);
	} catch (error) {
		console.log(`Data not found ${error}`);
	}
};

const displayData = (data) => {
	const imageOfTheDay = document.querySelector('.image-of-the-day');
	const imageTitle = document.querySelector('.image-title');
	const imageExplanation = document.querySelector('.image-explanation');
	const imageDate = document.querySelector('.image-date');

	imageOfTheDay.src = data.hdurl;
	imageTitle.textContent = data.title;
	imageExplanation.textContent = data.explanation;
	imageDate.textContent = `Date of the image: ${data.date}`;
	console.log(imageOfTheDay, imageTitle, imageExplanation, imageDate);
};

fetchNasaApodData();

document.addEventListener('contextmenu', (e) => {
	e.preventDefault();
});
