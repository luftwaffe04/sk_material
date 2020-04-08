// 가격을 받아오기 위한 ajax 통신
// Todo: url 변경 필요
function ajax_call(){
    $.ajax({
        type: 'get',
        url: "http://127.0.0.1:8000/crawling",
        data: {
        	'ajax': "True"
        },
    	success: function (response) {
            console.log(response, response.price);
            document.getElementById("price").value = response.price
            document.getElementById("change").value = response.price
        },
        error: function (request) {
            console.log("ajax error");
        }
    });
}
// 10초마다 ajax 통신
setInterval(ajax_call, 10000)
