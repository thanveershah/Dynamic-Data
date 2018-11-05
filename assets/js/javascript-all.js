$(document).ready(function() {
	$('span').click(function(){
		$('.top-header').toggleClass('toggleTopHeader');
		
	});

	$('.industry input').on('focus',function(){
		$('.industry').css('box-shadow','0 8px 8px grey');
		$('.sidebar-2 input').css('opacity','1');
	});

	$('.revenue input').on('focus',function(){
		$('.revenue').css('box-shadow','0 8px 8px grey');
		$('.sidebar-2 input').css('opacity','1');
	});

	$('.location input').on('focus',function(){
		$('.location').css('box-shadow','0 8px 8px grey');
		$('.sidebar-2 input').css('opacity','1');
	});

	$('.employees input').on('focus',function(){
		$('.employees').css('box-shadow','0 8px 8px grey');
		$('.sidebar-2 input').css('opacity','1');
	});

	$('.sidebar-2 input').on('focusout',function(){
		$('.industry , .revenue ,.employees,.location').css('box-shadow','0 1px 2px grey');
		$('.sidebar-2 input').css('opacity','.5');
	});

	$('#edit').click(function(){
		$('body').css('overflow-y','hidden');
		$('.editWrapper').css('display','block');
		$('.edit-1').css('display','flex');
	});

	$('#edit2').click(function(){
		$('body').css('overflow-y','hidden');
		$('.editWrapper-2').css('display','block');
	});

	$('#edit4').click(function(){
		$('body').css('overflow-y','hidden');
		$('.editWrapper-3').css('display','block');
	});

	$('#close').click(function(){
		$('.editWrapper').css('display','none');
		$('body').css('overflow-y','visible');
	});
	$('#close2').click(function(){
		$('.editWrapper-2').css('display','none');
		$('body').css('overflow-y','visible');
	});
	$('#close3').click(function(){
		$('.editWrapper-3').css('display','none');
		$('body').css('overflow-y','visible');
	});

	var typed = new Typed(".type", {
 	 strings: [
 	 "We Give You All The Information", 
 	 "Search For Something"
 	 ],
 	 typeSpeed:50,
 	 backSpeed:50,
 	 loop:true
	});	

	// Getting JSON Data Using AJAX
		$('#btn-industry').click(function(){
		 	if($('.edit-1 input').val()== ""){
		 		alert("Please fill the boxes");
		 		return false;
		 	}
		 	var input1 = $('#box1').val();
		 	var input2 = $('#box2').val();
		 	var input3 = $('#box3').val();
		 	var input4 = $('#box4').val();
		 	var input5 = $('#box5').val();
		 	$.ajax({
		 	url:'assets/js/test2.js',
		 	type:"GET",
		 	success:function(result){
		 		chartdiv2.dataProvider[0].income = input1;
		 		chartdiv2.dataProvider[1].income = input2;
		 		chartdiv2.dataProvider[2].income = input3;
		 		chartdiv2.dataProvider[3].income = input4;
		 		chartdiv2.dataProvider[4].income = input5;
		 		chartdiv2.validateData();
		 		}	 	
			 }); 
			 $('.editWrapper').css('display','none');	
			 $('body').css('overflow-y','visible');
		 }); 

		$('#btn-revenue').click(function(){
		 	if($('.edit-2 input').val()== ""){
		 		alert("Please fill the boxes");
		 		return false;
		 	}
		 	var input1 = $('#box6').val();
		 	var input2 = $('#box7').val();
		 	var input3 = $('#box8').val();
		 	var input4 = $('#box9').val();
		 	var input5 = $('#box10').val();
		 	$.ajax({
		 	url:'assets/js/test3.js',
		 	type:"GET",
		 	success:function(result){
		 		chart4.dataProvider[0].income = input1;
		 		chart4.dataProvider[1].income = input2;
		 		chart4.dataProvider[2].income = input3;
		 		chart4.dataProvider[3].income = input4;
		 		chart4.dataProvider[4].income = input5;
		 		chart4.validateData();
		 		}	 	
			 }); 	
		 	$('.editWrapper-2').css('display','none');	
			 $('body').css('overflow-y','visible');
		 }); 

		 $('#btn-employees').click(function(){
		 	if($('.edit-3 input').val()== ""){
		 		alert("Please fill the boxes");
		 		return false;
		 	}
		 	var input1 = $('#box11').val();
		 	var input2 = $('#box12').val();
		 	var input3 = $('#box13').val();
		 	var input4 = $('#box14').val();
		 	var input5 = $('#box15').val();
		 	$.ajax({
		 	url:'assets/js/test.js',
		 	type:"GET",
		 	success:function(result){
		 		chart3.dataProvider[0].visits = input1;
		 		chart3.dataProvider[1].visits = input2;
		 		chart3.dataProvider[2].visits = input3;
		 		chart3.dataProvider[3].visits = input4;
		 		chart3.dataProvider[4].visits = input5;
		 		chart3.validateData();
		 		}	 	
			 }); 	
		 	$('.editWrapper-3').css('display','none');	
			 $('body').css('overflow-y','visible');
		 }); 

		 $('#reset').click(function(){
		 	$('.edit-1 input').val("");
		 	$('.edit-2 input').val("");
		 	$('.edit-3 input').val("");
		 	$.ajax({
		 		url:"assets/js/testReset.js",
		 		type:"GET",
		 		success:function(result){
		 			chartdiv2.validateData();
					chart4.validateData();
					chart3.validateData();
		 		}
		 	})
		 });
 }); 
	

