$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;
    var pwd=document.getElementById("pwd").value;
		//修改密码请改此处
    if(userName=="吴文浩" &&  pwd=="2022"){
			event.preventDefault();
			$('form').fadeOut(500);
			$('.wrapper').addClass('form-success');
			setTimeout(function(){location.href="Memories.html";},2000);
		}
	else{
		alert("密码好像不太对呢，再试试⊙_⊙");
	}

});
