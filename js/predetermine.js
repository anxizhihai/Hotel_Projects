$(document).ready(function() {
    var roomname = GetUrlByParamName('name');
    $(".House_big").html(roomname);
    $(".bigroom").html(roomname);
    var type = GetUrlByParamName('type');
    $(".size").html(type);
    var areas = GetUrlByParamName('area');
    $(".areas").html(areas)
    var wifi = GetUrlByParamName('wifi');
    $(".broadbands").html(wifi);
    var breakfast = GetUrlByParamName('breakfast');
    $(".breakfasts").html(breakfast);
    var hotelname = GetUrlByParamName('hotelname');
    $(".bighotel").html(hotelname);
    var addressone = GetUrlByParamName('addressone');
    $(".address").html(addressone);
    var iphonesone = GetUrlByParamName('iphonesone');
    $(".phone").html(iphonesone);
    var img = GetUrlByParamName('imgs');
    $(".images").attr('src', img);
    var hotelId = GetUrlByParamName('hotelid');
    var price = GetUrlByParamName('price');

    $(".costs").html(price);
    $(".pay").html(price);


})


function GetUrlByParamName(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var URL = decodeURI(window.location.search);
    var r = URL.substr(1).match(reg);
    if (r != null) {
        //decodeURI() 函数可对 encodeURI() 函数编码过的 URI 进行解码  
        return decodeURI(r[2]);
    };
    return null;
};
//页面加载后立即执行  
window.onload = function() {
    //使用GetUrlByParamName()方法获取url中参数名为questionnaireName的参数内容  
    var questionnaireName = GetUrlByParamName("questionnaireName");
    // alert(questionnaireName);
}

//房间数量增加或较少
var num = 1;
var price;
$(".Numberroom").val(num);

$(".redues").click(function() {
    if ($(".Numberroom").val() > 1) {
        num--;
        $(".Numberroom").val(num);
        var price = GetUrlByParamName('price');
        console.log(price);
        var all = $(".costs").text() - price;
        console.log(all);
        $(".costs").html(all);
        $(".pay").html(all);

    }

});
$(".add").click(function() {
    num++;
    $(".Numberroom").val(num);
    var price = GetUrlByParamName('price');
    var all = price * $(".Numberroom").val();
    $(".costs").html(all);
    $(".pay").html(all);
});


//提交表单数据
function Generating_order() {
    let token = localStorage.token;
    let roomName = $(".House_big").text();
    console.log(roomName);
    let hotelId = GetUrlByParamName('hotelid');
    let checkTime = '1524153600000,1524326400000';
    let roomNumber = $(".Numberroom").val();
    console.log(roomNumber);
    let customerName = $(".Guests").val();
    console.log(customerName);
    let customerPhone = $(".Contact").val();
    console.log(customerPhone);
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/order/create", {
            method: "post", // post请求
            dataType: "json", // 希望服务器返回json格式数据，并使ajax进行json解析
            data: {
                token: token,
                roomName: roomName,
                hotelId: hotelId,
                checkTime: checkTime,
                roomNumber: roomNumber,
                customerName: customerName,
                customerPhone: customerPhone

            }, // 按接口文档要求传参
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) {
            // 提示用户
            if (data.code == "success") {
                alert("订单创建成功");
                var hotelone = $(".bighotel").text();
                var hotelrooms = $(".House_big").text();
                var priceroom = $(".pay").text();
                var src1 = $(".images")[0].src;
                var id = data.data._id;
                window.location.href = "payment.html?hotelone=" + hotelone + "&House_big=" + hotelrooms + "&pay=" + priceroom + "&src=" + src1 + "&id=" + id + "";
            }
        })
}
$(".Order").click(function() {
    Generating_order();
})