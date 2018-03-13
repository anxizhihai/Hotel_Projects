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

$(document).ready(function() {
    details();
});

function details() {
    let orderId = GetUrlByParamName("id");
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/order/detail", {
            method: "get", // get请求
            dataType: 'json', // 当服务器发来html元素时，需要如此设置，使ajax进行html解析
            data: {
                orderId: orderId
            },
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) {
            // 处理ajax成功的回调
            if (data.code == "success") {
                var orders = data.data.order;
                $(".status2").html(orders.status);
                $(".status5").html(orders.amount);
                $(".status8").html(orders.amount);
                $(".Ordernumber2").html(orders.orderNo);
                $(".Hotel2").html(orders.hotel.name);
                $(".apartment2").html(orders.roomName);
                $(".Predeterminedtime2").html(orders.create_time);
                $(".Timeperiod2").html(orders.check_in_time);
                $(".Timeperiod4").html(orders.check_out_time);
                $(".Guestname2").html(orders.customerName);
                $(".Phonenumber2").html(orders.customerPhone);
            }


        })
}