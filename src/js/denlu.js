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
                        $('.result').html(JSON.parse(res).msg)
                    }
                });




            });

        }

    }
})