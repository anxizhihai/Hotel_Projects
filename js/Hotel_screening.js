$(document).ready(function() {
    //调用添加城市函数
    getCaptchareceive();
    //默认设定城市为西安
    $(".choicecityin").val("西安");
    $(".recommend1").css("background-color", "#5944C3");
    //一开始就加载的西安的酒店
    hotelist('1');
    window.addEventListener('scroll', _.throttle(lazyLoad(), 100));

});

//行政
$(".choice_boxs1span3").click(function() {
    $(".district").toggle();
    $(".Business_Circles").hide();
    $(".Metro_Station").hide();
    $(".Station").hide();
    $(".Scenic").hide();
    $(".districtul li").remove();
    getCaptcha();
});
//商圈
$(".choice_boxs1span4").click(function() {
    $(".Business_Circles").toggle();
    $(".district").hide();
    $(".Metro_Station").hide();
    $(".Station").hide();
    $(".Scenic").hide();
    $(".Business_Circlesul li").remove();
    Business();
});
//地铁站
$(".choice_boxs1span5").click(function() {
    $(".Metro_Station").toggle();
    $(".Business_Circles").hide();
    $(".district").hide();
    $(".Station").hide();
    $(".Scenic").hide();
});
$(".Line_number1").click(function() {
    $(".Metro_Stationul2").hide();
    $(".Metro_Stationul3").hide();
    $(".Metro_Stationul1").show();
    $(".Metro_Stationul1 li").remove();
    Metro();
});
$(".Line_number2").click(function() {
    $(".Metro_Stationul1").hide();
    $(".Metro_Stationul3").hide();
    $(".Metro_Stationul2").show();
    $(".Metro_Stationul1 li").remove();
    $(".Metro_Stationul2 li").remove();
    Metro();
});

$(".Line_number3").click(function() {
    $(".Metro_Stationul1").hide();
    $(".Metro_Stationul2").hide();
    $(".Metro_Stationul3").show();
    $(".Metro_Stationul3 li").remove();
    Metro();
});
//车站
$(".choice_boxs1span6").click(function() {
    $(".Station").toggle();
    $(".Business_Circles").hide();
    $(".Metro_Station").hide();
    $(".district").hide();
    $(".Scenic").hide();
    $(".Stationul1 li").remove();
    $(".Stationul2 li").remove();
    $(".Stationul3 li").remove();
    Station();
});
//景点
$(".choice_boxs1span7").click(function() {
    $(".Scenic").toggle();
    $(".Business_Circles").hide();
    $(".Metro_Station").hide();
    $(".Station").hide();
    $(".district").hide();
    $(".Scenic_ul li").remove();
    Scenic();
})

//行政圈
function getCaptcha() {
    let cityName = $(".choicecityin").val();
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/city/area", {
            method: "get", // get请求
            dataType: 'json', // 当服务器发来html元素时，需要如此设置，使ajax进行html解析
            data: {
                cityName: cityName
            },
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) {
            // 处理ajax成功的回调
            var area = data.data.area;
            var str = "";
            for (var i = 0; i < area.length; i++) {
                str += '<li class="districtli">' + area[i] + '</li>';
            }
            $(".districtul").append(str);
            $(function() {
                //限制字符个数
                $(".districtli").each(function() {
                    var maxwidth = 3;
                    if ($(this).text().length > maxwidth) {
                        $(this).text($(this).text().substring(0, maxwidth));
                        $(this).html($(this).html() + '…');
                    }
                });
            });
        })
}
$(".districtul").on("click", "li ", function() {
    var Uarry = $(".districtul li"); //获取所有的li元素
    var count = $(this).index(); //获取li的下标  
    var Tresult = Uarry.eq(count).text();
    $(".choicemessagein").val(Tresult);
});
//商圈
function Business() {
    let cityName = $(".choicecityin").val();
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/city/trad", {
            method: "get", // get请求
            dataType: 'json', // 当服务器发来html元素时，需要如此设置，使ajax进行html解析
            data: {
                cityName: cityName
            },
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) {
            // 处理ajax成功的回调
            var area = data.data.trad;
            var str = "";
            for (var i = 0; i < area.length; i++) {
                str += '<li class="Business_Circlesli">' + area[i] + '</li>';
            }
            $(".Business_Circlesul").append(str);
            $(function() {
                //限制字符个数
                $(".Business_Circlesli").each(function() {
                    var maxwidth = 3;
                    if ($(this).text().length > maxwidth) {
                        $(this).text($(this).text().substring(0, maxwidth));
                        $(this).html($(this).html() + '…');
                    }
                });
            });
        })
}
$(".Business_Circlesul").on("click", "li ", function() {
    var Uarry = $(".Business_Circlesul li"); //获取所有的li元素
    var count = $(this).index(); //获取li的下标  
    var Tresult = Uarry.eq(count).text();
    $(".choicemessagein").val(Tresult);
});
//地铁
function Metro() {
    let cityName = $(".choicecityin").val();
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/city/subway/station", {
            method: "get", // get请求
            dataType: 'json', // 当服务器发来html元素时，需要如此设置，使ajax进行html解析
            data: {
                cityName: cityName
            },
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) {
            // 处理ajax成功的回调 1号线
            var station = data.data.subway["地铁1号线"];
            console.log(station);
            var str = "";
            for (var i = 0; i < station.length; i++) {
                str += '<li class="Metro_Stationli">' + station[i] + '</li>';
            }
            $(".Metro_Stationul1").append(str);
            $(function() {
                //限制字符个数
                $(".Business_Circlesli").each(function() {
                    var maxwidth = 3;
                    if ($(this).text().length > maxwidth) {
                        $(this).text($(this).text().substring(0, maxwidth));
                        $(this).html($(this).html() + '…');
                    }
                });
            });

            //2号线
            var station = data.data.subway["地铁2号线"];
            var str = "";
            for (var i = 0; i < station.length; i++) {
                str += '<li class="Metro_Stationli">' + station[i] + '</li>';
            }
            $(".Metro_Stationul2").append(str);
            $(function() {
                //限制字符个数
                $(".Business_Circlesli").each(function() {
                    var maxwidth = 3;
                    if ($(this).text().length > maxwidth) {
                        $(this).text($(this).text().substring(0, maxwidth));
                        $(this).html($(this).html() + '…');
                    }
                });
            });
            //3号线
            var station = data.data.subway["地铁3号线"];
            var str = "";
            for (var i = 0; i < station.length; i++) {
                str += '<li class="Metro_Stationli">' + station[i] + '</li>';
            }
            $(".Metro_Stationul3").append(str);
            $(function() {
                //限制字符个数
                $(".Business_Circlesli").each(function() {
                    var maxwidth = 3;
                    if ($(this).text().length > maxwidth) {
                        $(this).text($(this).text().substring(0, maxwidth));
                        $(this).html($(this).html() + '…');
                    }
                });
            });
        })
}
$(".Metro_Stationul2").on("click", "li ", function() {
    var Uarry = $(".Metro_Stationul2 li"); //获取所有的li元素
    var count = $(this).index(); //获取li的下标  
    var Tresult = Uarry.eq(count).text();
    $(".choicemessagein").val(Tresult);
});
$(".Metro_Stationul1").on("click", "li ", function() {
    var Uarry = $(".Metro_Stationul1 li"); //获取所有的li元素
    var count = $(this).index(); //获取li的下标  
    var Tresult = Uarry.eq(count).text();
    $(".choicemessagein").val(Tresult);
});
$(".Metro_Stationul3").on("click", "li ", function() {
    var Uarry = $(".Metro_Stationul3 li"); //获取所有的li元素
    var count = $(this).index(); //获取li的下标  
    var Tresult = Uarry.eq(count).text();
    $(".choicemessagein").val(Tresult);
});
//车站
function Station() {
    let cityName = $(".choicecityin").val();
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/city/station", {
            method: "get", // get请求
            dataType: 'json', // 当服务器发来html元素时，需要如此设置，使ajax进行html解析
            data: {
                cityName: cityName
            },
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) {
            // 处理ajax成功的回调
            var railway = data.data.station["火车站"];
            var str = "";
            for (var i = 0; i < railway.length; i++) {
                str += '<li class="Business_Circlesli1">' + railway[i] + '</li>';
            }
            $(".Stationul1").append(str);
            //限制字符个数
            $(".Business_Circlesli1").each(function() {
                var maxwidth = 5;
                if ($(this).text().length > maxwidth) {
                    $(this).text($(this).text().substring(0, maxwidth));
                    $(this).html($(this).html() + '…');
                }
            });
            var BusStation = data.data.station["长途汽车站"];
            var str1 = "";
            for (var i = 0; i < BusStation.length; i++) {
                str1 += '<li class="Business_Circlesli2">' + BusStation[i] + '</li>';
            }
            $(".Stationul2").append(str1);
            //限制字符个数
            $(".Business_Circlesli2").each(function() {
                var maxwidth = 5;
                if ($(this).text().length > maxwidth) {
                    $(this).text($(this).text().substring(0, maxwidth));
                    $(this).html($(this).html() + '…');
                }
            });

            var Airport = data.data.station["飞机场"];
            var str2 = "";
            for (var i = 0; i < Airport.length; i++) {
                str2 += '<li class="Business_Circlesli3">' + Airport[i] + '</li>';
            }
            $(".Stationul3").append(str2);
            //限制字符个数
            $(".Business_Circlesli3").each(function() {
                var maxwidth = 5;
                if ($(this).text().length > maxwidth) {
                    $(this).text($(this).text().substring(0, maxwidth));
                    $(this).html($(this).html() + '…');
                }
            });
        });
}
$(".Stationul1").on("click", "li ", function() {
    var Uarry = $(".Stationul1 li"); //获取所有的li元素
    var count = $(this).index(); //获取li的下标  
    var Tresult = Uarry.eq(count).text();
    $(".choicemessagein").val(Tresult);
});
$(".Stationul2").on("click", "li ", function() {
    var Uarry = $(".Stationul2 li"); //获取所有的li元素
    var count = $(this).index(); //获取li的下标  
    var Tresult = Uarry.eq(count).text();
    $(".choicemessagein").val(Tresult);
});
$(".Stationul3").on("click", "li ", function() {
    var Uarry = $(".Stationul3 li"); //获取所有的li元素
    var count = $(this).index(); //获取li的下标  
    var Tresult = Uarry.eq(count).text();
    $(".choicemessagein").val(Tresult);
});


//景点
function Scenic() {
    let cityName = $(".choicecityin").val();
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/city/view/spot", {
            method: "get", // get请求
            dataType: 'json', // 当服务器发来html元素时，需要如此设置，使ajax进行html解析
            data: {
                cityName: cityName
            },
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) {
            // 处理ajax成功的回调
            var viewSpot = data.data.viewSpot;
            var str = "";
            for (var i = 0; i < viewSpot.length; i++) {
                str += '<li class="Scenicli">' + viewSpot[i] + '</li>';
            }
            $(".Scenic_ul").append(str);
            $(function() {
                //限制字符个数
                $(".Business_Circlesli").each(function() {
                    var maxwidth = 3;
                    if ($(this).text().length > maxwidth) {
                        $(this).text($(this).text().substring(0, maxwidth));
                        $(this).html($(this).html() + '…');
                    }
                });
            });
        })
}
$(".Scenic_ul").on("click", "li ", function() {
    var Uarry = $(".Scenic_ul li"); //获取所有的li元素
    var count = $(this).index(); //获取li的下标  
    var Tresult = Uarry.eq(count).text();
    $(".choicemessagein").val(Tresult);
});
//一打开页面显示的西安酒店函数
function hotelist(page) {
    let img_url = "https://dev.apis.sh/P7G0PaMgO/static/";
    let cityName = $(".choicecityin").val();
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/hotel/list", {
            method: "get", // get请求
            dataType: 'json', // 当服务器发来html元素时，需要如此设置，使ajax进行html解析
            data: {
                cityName: cityName,
                limit: '5',
                page: page
            },
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) {
            var Dynamic = data.data.hotelList;
            var str = "";
            for (var i = 0; i < Dynamic.length; i++) {
                str += '<div class="divbox">';
                str += '<div class="divinside">';
                str += '<a target = "_blank" href="Hotel_Details.html?hotel_id=' + Dynamic[i]._id + '">'
                str += '<img class="picture" src="' + img_url + Dynamic[i].picture['0'] + '">';
                str += '</a>'
                str += '<div class="rightbox">'; //图片右边的盒子
                str += '<span class="name">' + Dynamic[i].name + '</span>'; //酒店名字
                str += '<span class="star">' + Dynamic[i].star_level + '</span><br>' //几个星星
                str += '<span class="address">' + Dynamic[i].address + '</span>'; //地址
                str += '<div class="rightboxoverall">' //图片右边盒子里的盒子，分数，点评
                str += '<span class="overall">' + Dynamic[i].overall_rating + '/5分</span><br>'; //几分
                str += '<span class="comment">' + Dynamic[i].comment_num + '次点评</span>'; //评论次数
                str += '</div>';
                str += '</div>';
                str += '<div class="boxprice">' //价格，详情
                str += '<span class="price">￥' + Dynamic[i].price + '起</span>'
                str += '<button type="button" class="pricebutton">查看详情</button>'
                str += '</div>'
                str += '</div>';
                str += '</div>';
            }
            $(".dynamiclists").append(str);

        })
}
//关键字条件搜索
function Hotel_lists(page) {
    let hotelKeyword = $(".choicemessagein").val();
    let cityName = $(".choicecityin").val();
    let number = getValue();
    let priceRange = '';
    if (number == '1') {
        priceRange = '0,100';
    } else if (number == '2') {
        priceRange = '100, 300';
    } else if (number == '3') {
        priceRange = '300, 600';
    } else if (number == '4') {
        priceRange = '600, 1000';
    }
    let number1 = getValue1();
    let starLevel = '';
    if (number1 == '1') {
        starLevel = '5';
    } else if (number1 == '2') {
        starLevel = '4';
    } else if (number1 == '3') {
        starLevel = '3';
    } else if (number1 == '4') {
        starLevel = '2'
    }
    let number2 = getValue2();
    let specialLevel = '';
    if (number2 == '1') {
        specialLevel = '经济连锁';
    } else if (number2 == '2') {
        specialLevel = '客栈公寓';
    }
    let number3 = getValue3();
    let brand = '';
    if (number3 == '1') {
        brand = '如家快捷'
    } else if (number3 == '2') {
        brand = '汉庭酒店';
    } else if (number3 == '3') {
        brand = '七天连锁';
    } else if (number3 == '4') {
        brand = '锦江之星'
    } else if (number3 == '5') {
        brand = '布丁';
    } else if (number3 == '6') {
        brand = '速8';
    }

    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/hotel/list", {
            method: "get", // get请求
            dataType: 'json', // 当服务器发来html元素时，需要如此设置，使ajax进行html解析
            data: {
                cityName: cityName,
                limit: '5',
                page: page,
                hotelKeyword: hotelKeyword,
                priceRange: priceRange,
                starLevel: starLevel,
                specialLevel: specialLevel,
                brand: brand
            },
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) {
            // 处理ajax成功的回调
            let img_url = "https://dev.apis.sh/P7G0PaMgO/static/";
            var Dynamic = data.data.hotelList;
            var str = "";
            for (var i = 0; i < Dynamic.length; i++) {
                str += '<div class="divbox">';
                str += '<div class="divinside">';
                str += '<a target = "_blank" href="Hotel_Details.html?hotel_id=' + Dynamic[i]._id + '">'
                str += '<img class="picture" src="' + img_url + Dynamic[i].picture['0'] + '">';
                str += '</a>'
                str += '<div class="rightbox">'; //图片右边的盒子
                str += '<span class="name">' + Dynamic[i].name + '</span>'; //酒店名字
                str += '<span class="star">' + Dynamic[i].star_level + '</span><br>' //几个星星
                str += '<span class="address">' + Dynamic[i].address + '</span>'; //地址
                str += '<div class="rightboxoverall">' //图片右边盒子里的盒子，分数，点评
                str += '<span class="overall">' + Dynamic[i].overall_rating + '/5分</span><br>'; //几分
                str += '<span class="comment">' + Dynamic[i].comment_num + '次点评</span>'; //评论次数
                str += '</div>';
                str += '</div>';
                str += '<div class="boxprice">' //价格，详情
                str += '<span class="price">￥' + Dynamic[i].price + '起</span>'
                str += '<button type="button" class="pricebutton">查看详情</button>'
                str += '</div>'
                str += '</div>';
                str += '</div>';
            }
            $(".dynamiclists1").append(str);

        });
}
//搜索按钮
$(".btn").click(function() {
    $('.dynamiclists1').empty();
    $(".dynamiclists").hide();
    Hotel_lists('1');
    window.addEventListener('scroll', _.throttle(lazyLoad1(), 100));
});

function getValue() {
    var radio = document.getElementsByName("names");
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return radio[i].value
        }
    }
}
//星级
function getValue1() {
    var radio = document.getElementsByName("stars");
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return radio[i].value
        }
    }
}
//经济连锁
function getValue2() {
    var radio = document.getElementsByName("star");
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return radio[i].value
        }
    }
}

//快捷酒店
function getValue3() {
    var radio = document.getElementsByName("brads");
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return radio[i].value
        }
    }
}

//推荐一栏
$(".recommend1").mouseenter(function() {
    $(".recommend1").css("background-color", "#5944C3");
    $(".recommend1").siblings().css("background-color", "");
});
$(".recommend2").mouseenter(function() {
    $(".recommend2").css("background-color", "#5944C3");
    $(".recommend2").siblings().css("background-color", "");
});
$(".recommend3").mouseenter(function() {
    $(".recommend3").css("background-color", "#5944C3");
    $(".recommend3").siblings().css("background-color", "");
});
$(".recommend4").mouseenter(function() {
    $(".recommend4").css("background-color", "#5944C3");
    $(".recommend4").siblings().css("background-color", "");
});

//懒加载
//页面一打开整个西安的酒店
function lazyLoad() {
    var page = 2;
    return function() {
        var loading = document.getElementById("loading");
        if (loading.getBoundingClientRect().top + loading.offsetHeight < document.documentElement.clientHeight) {
            hotelist(page++);
        }
    }
}
//懒加载
function lazyLoad1() {
    var page = 2;
    return function() {
        var loading = document.getElementById("loading");
        if (loading.getBoundingClientRect().top + loading.offsetHeight < document.documentElement.clientHeight) {
            Hotel_lists(page++);
        }
    }
}