function mypit() {
    var myfiles = document.getElementById("uploadfiles"); //获取点击按钮的对象
    var ua = navigator.userAgent.toLowerCase(); //判断浏览器类型
    var url = '';
    if (/msie/.test(ua)) //判断当前浏览器是否为IE浏览器
    {
        url = myfiles.value;
    } else {
        url = window.URL.createObjectURL(myfiles.files[0]); //获取forms中的文件，并赋值给url，每次调用URL.crreateObjectURl方法时，都会创建一个对象。
    }
    // document.getElementById("myimg").src = url; //获取img标签对象的src，并将url赋值给img标签的src属性，这是完成打印的一步。
    var str = '';
    str += '<img class="imagesss" src="' + url + '">';
    $(".uploadbtn").append(str);

}
$(".uploadfiles").change(function() {
    mypit();
})