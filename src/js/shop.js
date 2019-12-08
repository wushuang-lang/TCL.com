// let baseUrl = "http://localhost:8080/1910/day36/shopcar";
// 总价:￥${(arr[0].num*elm.price).toFixed(2)}${pic[0].src}
define(['jquery', 'cookie'], function($, cookie) {
    return {

        render: function() {
            // localtion.reload();
            let shop = cookie.get('shop');
            if (shop) {
                shop = JSON.parse(shop);
                let idList = shop.map(elm => elm.id).join(); //取id并且用,连接
                $.ajax({
                    url: `http://127.0.0.1:8080/TCL/src/lib/shopcar.php`,
                    type: 'get',
                    data: {
                        'idlist': idList
                    },
                    dataType: 'json',
                    success: function(res) {
                        // console.log(res);
                        let tempstr = '';
                        res.forEach(elm => {
                            let pic = JSON.parse(elm.pic);
                            let arr = shop.filter((val, i) => {
                                // 从购物车cookie数据中取出于本条遍历数据相同id的元素
                                return val.id == elm.id;

                            });

                            tempstr += `
                            <li class="section-panner">
                            <dl>
                                <dd class="shop-item sel-wid">
                                    <span class="checkbox"></span>
                                </dd>
                                <dd class="shop-item">
                                    <span class="left">
                                        <a href="">
                                       <img src="..${pic[1].src}" alt="">
                                        </a>
                
                                    </span>
                                </dd>
                                <dd class="shop-item shop-title">
                                    <a href="">
                                        <p>${elm.title}</p>
                                    </a>
                                </dd>
                                <dd class="shop-item shop-money">
                                    <span>${elm.num}</span>
                                </dd>
                                <dd class="shop-item j-select">
                                    <span class="less">-</span>
                                    <input type="text" value="${arr[0].number}" class="nei">
                                    <span class="more" id="more">+</span>
                                </dd>
                                <dd class="shop-item sub-wid">
                                    <p>${(arr[0].number*elm.num).toFixed(2)}</p>
                                    <span>7999.00</span>
                                </dd>
                                <dd class="shop-item cz">
                                    <span class="add iconfont icon-buoumaotubiao44
                                    "></span>
                                    <span class="remove iconfont icon-shanchu"></span>
                                </dd>
                            </dl>
                
                        </li>
                     
                            `;
                        });

                        $('.section').append(tempstr);
                        // location.reload();
                    }
                });

            }

        },
        mop: function() {
            $('.section').on('click', '.checkbox', function(ev) {
                if ($(this).hasClass('ppt')) {
                    $(this).removeClass('ppt');
                    $('.rmbg').each(function(i, elm) {
                        $(elm).html((0.00).toFixed(2))
                    })


                } else {
                    $(this).addClass('ppt');
                    $('.rmbg').each(function(i, elm) {
                        // $(elm).html((0.00).toFixed(2))
                        var shop = cookie.get('shop');
                        var op = JSON.parse(shop);
                        // console.log(op[0].id)
                        op.forEach(function(val, i) {
                            // console.log(val.id)

                            $(elm).html((val.num * val.number).toFixed(2))

                            // console.log(val.num * val.number)


                        })
                    })
                }


                // if ($('.active').className = 'ppt') {
                //     $('this').className = 'ppt'
                // }
                // console.log($(.active))
                // $(this).toggleClass('ppt')

            });

            $('.section').on('click', '.remove', function(ev) {
                $('.lpl').each(function(i, elm) {
                    // $('body').each(function(i, elm) {
                    // elm.style = "background:red";
                    // $('elm').css('background', '');
                    // console.log(elm)
                    // })
                    elm.style.display = 'block';
                    // $('window').style = "color:#9e9e9e"
                    // $('body').css('background:#5e5e5e');


                });
                $('.mb-no').each(function(i, elm) {
                    elm.onclick = function(ev) {

                        var sp = JSON.parse(cookie.get('shop'));
                        sp.splice($(ev.target.parentNode).attr('index'), 1);
                        var ss = JSON.stringify(sp);
                        cookie.set('shop', ss);
                        location.reload();
                    };
                    $('.mb-ok').each(function(i, elm) {
                        elm.onclick = function() {
                            $('.lpl').each(function(i, elm) {
                                elm.style.display = 'none';

                            });
                        }
                    })

                });


            })


        },
        rend: function() {
            let shop = cookie.get('shop');
            if (shop) {
                shop = JSON.parse(shop);
                let idList = shop.map(elm => elm.number);



                $('.section').on('click', '#more', function() {
                    var count = 1;
                    $('.nei').each(function(i, elm) {
                        // parseFloat(this.value += 1;
                        console.log(elm)

                        // console.log(parseFloat(this.value) += 1)
                        count += Number(this.value);
                        $(elm).html(count)
                    })



                })
            }
        },

        //     // this.style.backgroundImage = "url('../images/shop.png')"
        // },
        bing: function() {

            $('.active').each(function(i, elm) {
                elm.onclick = function() {
                    // this.style.backgroundImage = "url('../images/shop.png')"
                    // $(this).toggleClass('ppt')
                    if ($(this).hasClass('ppt')) {
                        $(this).removeClass('ppt')
                        $('.checkbox').each(function(i, elm) {
                            $(elm).removeClass('ppt')
                            $('.rmbg').each(function(i, elm) {
                                // console.log($(elm).html())

                                $(elm).html((0).toFixed(2));
                                $('.jian').each(function(i, elm) {
                                    // console.log($(elm).html())

                                    $(elm).html(0)
                                })
                            });
                            // elm.style.backgroundImage = "url('../images/shop.png');
                            // console.log(elm)
                        })
                    } else {
                        $(this).addClass('ppt');
                        $('.checkbox').each(function(i, elm) {
                            $(elm).addClass('ppt')
                            $('.rmbg').each(function(i, elm) {
                                    // console.log($(elm).html())
                                    let shop = cookie.get('shop');
                                    let lp = JSON.parse(shop);
                                    let nent = 0;
                                    lp.forEach(function(val, i) {
                                        // console.log((val.num * val.number))
                                        nent += parseFloat((val.number * val.num));
                                    });
                                    $(elm).html((nent).toFixed(2));


                                    $('.jian').each(function(i, elm) {
                                        // console.log($(elm).html())
                                        var shop = cookie.get('shop');
                                        let lo = JSON.parse(shop);
                                        var noum = 0;
                                        lo.forEach(function(val, i) {
                                            noum += parseFloat(val.number);
                                        })
                                        $(elm).html(noum)
                                    })
                                })
                                // elm.style.backgroundImage = "url('../images/shop.png');
                                // console.log(elm)
                        })

                    }



                }

            })
        },
        jixu: function() {
            $('.m_sp>.shuliang').each(function(i, elm) {
                // $(elm).html();
                let shop = cookie.get('shop');
                var lp = JSON.parse(shop);
                // console.log(lp)
                let count = 0;
                lp.forEach(function(val, i) {

                    count += parseFloat(val.number);
                })

                $(elm).html(count);



            })
        }

    }
});