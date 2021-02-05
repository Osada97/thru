	function view_star(a,b){//fill star
		var onStar = document.getElementsByClassName('on_star'+b);

		for(var x=0;x <= a;x++){
			onStar[x].style.display="inline";
		}
	}

	function off_star(x,d){//remove star

		var onStar = document.getElementsByClassName('on_star'+d);

		for(var z=0;z<=x;z++){
			onStar[z].style.display="none";
		}
	}