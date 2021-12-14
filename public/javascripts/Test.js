//Post
$("#sum").click(function(){
    var n1 = $("#num1").val();
    var n2 = $("#num2").val();
    var API = "http://localhost:3000/my/sum";
    $.post(
        API,
        { num1:n1, num2:n2 },
        function(res){
            alert('加總(post)=' + res.mySum);
            console.log(res);
        });
});


//GET
$("#sum").click(function(){
    var n1 = $("#num1").val();
    var n2 = $("#num2").val();
    var API = "http://localhost:3000/my/sum?num1=" + n1 + "&num2=" + n2;
    $.get(API,
        function(res){
            alert('加總(get)=' + res.mySum);
        });
});
