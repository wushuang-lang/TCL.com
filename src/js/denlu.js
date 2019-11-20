define(['jquery', 'md5'], function($, md5) {
    return {
        denluEv: function() {

            $('.btn').on('click', function() {


                $.ajax({
                    type: "get",
                    url: "http://127.0.0.1:8080/TCL/src/lib/denlu.php",
                    data: {
                        username: $('#username').val(),
                        password: $.md5($('#password').val()),
                    },

                    success: function(res) {
                        // console.log(res)
                        $('.result').html(JSON.parse(res).msg);
                        // var t = $('.result').html(JSON.parse(res).msg);
                        if (JSON.parse(res).msg == '登录成功') {
                            setTimeout(function() {
                                location.href = "../html/main.html"
                            }, 1000)
                        } else if (JSON.parse(res).msg == '用户名或密码不正确') {

                            setTimeout(function() {
                                location.reload();
                            }, 1000)
                        }
                    }
                });
            });

        }

    }
})