import axios from 'axios';
//flickr
export const fetchFlickr = async (opt) => {
	const key = '4612601b324a2fe5a1f5f7402bf8d87a';
	const method_search = 'flickr.photos.search';
	const method_user = 'flickr.people.getPhotos';
	let url = '';
	let result = '';
	if (opt.type === 'search') {
		url = `https://www.flickr.com/services/rest/?method=${method_search}&api_key=${key}&user_id=${opt.user}&tags=${opt.tags}&format=json&nojsoncallback=1`;
		await axios.get(url).then((json) => {
			result = json.data.photos.photo;
		});
	}
	if (opt.type === 'user') {
		url = `https://www.flickr.com/services/rest/?method=${method_user}&api_key=${key}&per_page=${opt.count}&nojsoncallback=1&format=json&user_id=${opt.user}`;
		await axios.get(url).then((json) => {
			result = json.data.photos.photo;
		});
	}

	return result;
};

//youtube
export const fetchYoutube = async () => {
	const key = 'AIzaSyC77Pd__ju0Wqx_Umc-IuW7Cn2mWi_HVsk';
	const playlist = 'PLHtvRFLN5v-W-izd7V4JH2L4-RTW0WRi3';
	const num = 8;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;

	return await axios.get(url);
};

//member
export const fetchMember = async () => {
	const url = `${process.env.PUBLIC_URL}/DB/members.json`;

	return await axios.get(url);
};
