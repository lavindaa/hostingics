const txtElement = ['Mahasiswa di STT YBS Internasional'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik() {

	if(count == txtElement.length){
		count = 0;
	}

	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.efek-ngetik').textContent = words;

	setTimeout(ngetik, 500);

	if(words.length == currentTxt.length){
		count++;
		txtIndex = 0;
	}
	

})();