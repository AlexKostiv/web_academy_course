export class Request{
	get(url, onSuccess, onError) {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.send();

		const stateChangeHandler = () => {
			if(xhr.readyState === 4){
				if(xhr.status !== 200) {
					onError(xhr.status, xhr.responseText);
				}

				onSuccess(xhr.response);
			}
		}

		xhr.addEventListener('readystatechange', stateChangeHandler);
	}

	post(url, data, onSuccess, onError){
		const xhr = new XMLHttpRequest();
		xhr.open('POST', url);
		xhr.setRequestHeader('Content-Type', 'application/json');//вказуємо серверу що дані він мусить отримувати як json а не як рядок
		xhr.send(data);//в тілі запиту вказуємо яку інформацію хочемо відправити. JSON.stringify перетворює об*єкт в рядок.
		const stateChangeHandler = () => {
			if(xhr.readyState === 4){
				if(xhr.status !== 200) {
					onError(xhr.status, xhr.responseText);
				}
				onSuccess(xhr.response);
			}
		}

		xhr.addEventListener('readystatechange', stateChangeHandler);
	}

	delete(url, id, onSuccess) {
		const xhr = new XMLHttpRequest();
		xhr.open('DELETE', `${url}/${id}`);
		xhr.send();

		const stateChangeHandler = () => {
			if (xhr.readyState === 4) {
				if (xhr.status !== 200) {
					onError(xhr.status, xhr.responseText);
				}
				onSuccess();
			}
		}

		xhr.addEventListener('readystatechange', stateChangeHandler);
	}
}