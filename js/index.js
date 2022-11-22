


	var area = document.getElementsByClassName('webWrap');
	var i = area.length;
		if (i == 0) {
			area[i].addEventListener('mouseOver', changeText);
			function changeText () {
				var siteName = document.querySelector('h1 strong');
				siteName.innerText = "사이트로 이동";
			};
		};
		if (i == 1) {
			area[i].addEventListener('mouseOver', changeText);
			function changeText () {
				var siteName = document.querySelector('h1 strong');
				this.siteName.innerText = "사이트로 이동";
			};
		};
		if (i == 2) {
			area[i].addEventListener('mouseOver', changeText);
			function changeText () {
				var siteName = document.querySelector('h1 strong')
				this.siteName.innerText = "사이트로 이동";
			};
		};
