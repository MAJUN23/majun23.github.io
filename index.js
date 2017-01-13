console.log($('p'));
console.log("Yea");

$('#button1').on('click',
	function() {
		$('h1').append(" I love JADE!");
	}
);

/*
 consider
 $(document).ready(funtion() {
	put other things here.
 }
 );