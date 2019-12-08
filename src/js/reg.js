define(['jquery', 'md5'], function($, md5) {
    return {
        regEv: function() {
            $('.btn').on('click', function() {

                $.ajax({
                    type: "get",
                    url: "http://127.0.0.1:8080/TCL/src/lib/zhuce.php",
                    data: {
                        username: $('#username').val(),
                        password: $.md5($('#password').val()),

                        phone: $('#phone').val(),

                    },

                    success: function(res) {

                        $('.result').html(JSON.parse(res).msg)
                        if (JSON.parse(res).msg == '注册成功') {
                            setTimeout(function() {
                                location.href = "../html/main.html"
                            }, 1000)
                        } else if (JSON.parse(res).msg == '用户名已存在') {

                            // setTimeout(function() {
                            // location.reload();
                            // }, 1000)
                        }
                    }
                });




            });

        }

    }
})