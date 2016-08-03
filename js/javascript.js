$(function(){
		  var first;
			$("input").each(function(index,element) {
				$(element).change(function() {
				   
				    
				    
					first = $(this).val();
					 var firsts = parseFloat(first);
					 if (firsts> 100) {
					     alert("Введіть чило від 0 до 100");
					     $(element).css({
					         border:"2px solid red",
					         color : "red"
					     });
					     return;
					 } else if (first * 1 !== firsts) {
					     alert("Ви ввели не число! Введіть число.");
					     $(element).css({
					         border:"2px solid red",
					         color : "red"
					     });
			            return;
					 }
					$("p").eq(index).animate({'width': first  + "%" },3000, "easeInBounce");
					$("p+span").eq(index).html(first);
					$(element).css({
					         border:"2px solid green",
					         color : "blue"
					     });
				});
			});
		});