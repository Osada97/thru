var num=1;
var column_length=document.getElementsByClassName('testi_main_column').length;//get class length

document.getElementById(1).style.display = "block";//display 1st column

var auto_run = setInterval(show,3000);

	function show(){

		if(num<=column_length){
			if(num==1){
				var hide_column = document.getElementById(num);
				hide_column.style.display="none";
				var show_column = document.getElementById(num+1);
				show_column.style.display="block";
			}
			else if(num<column_length){
				var hide_column = document.getElementById(num);
				hide_column.style.display="none";
				var show_column = document.getElementById(num+1);
				show_column.style.display="block";
			}
			else{
				var hide_column = document.getElementById(num);
				hide_column.style.display="none";
				var show_column = document.getElementById(1);
				show_column.style.display="block";
			}

			num++;
		}
		else{
			num = 1;
		}
	}