async function download1(){
	let uri1="./data/SongList.txt";
	let res1=await fetch(uri1);
	if (res1.ok){
	let	data1=await res1.txt();
	}
	let	files=data1.split('\n');
	alert(files);
}