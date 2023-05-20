$(function() {

    $('.icon-home').click(function() {
        window.location.href = 'index.html'
    });

    $('.icon-category').click(function() {
        window.location.href = 'logo.html'

    });

    $("#pager").zPager({
        totalData: 55, //需要手动修改 计算方式 totalData/5 向上取整
        htmlBox: $('#wraper'),
        btnShow: true,
        ajaxSetData: false
    });


})