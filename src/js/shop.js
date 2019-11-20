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
                        idlist: idList
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
                                console.log(i)
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
                    }
                });

            }
            $('.section').on('click', '.checkbox', '.active', function() {
                // if ($('.active').className = 'ppt') {
                //     $('this').className = 'ppt'
                // }
                // console.log($(.active))
                $(this).toggleClass('ppt')

            })

            $('.section').on('click', '.remove', function() {
                $('.lpl').each(function(i, elm) {
                    elm.style.display = 'block';
                    // $('window').style = "color:#9e9e9e"


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
                let idList = shop.map(elm => elm.id);
                // console.log(idList)

                var n = 1;
                $('.section').on('click', '#more', function() {

                    $('.nei').each(function(i, elm) {
                        this.value = n;
                        n++;


                    })


                })
            }

            // this.style.backgroundImage = "url('../images/shop.png')"
        },
        bing: function() {

            $('.active').each(function(i, elm) {
                elm.onclick = function() {
                    // this.style.backgroundImage = "url('../images/shop.png')"
                    // $(this).toggleClass('ppt')
                    if ($(this).hasClass('ppt')) {
                        $(this).removeClass('ppt')
                        $('.checkbox').each(function(i, elm) {
                            $(elm).removeClass('ppt')
                                // elm.style.backgroundImage = "url('../images/shop.png');
                                // console.log(elm)
                        })
                    } else {
                        $(this).addClass('ppt');
                        $('.checkbox').each(function(i, elm) {
                            $(elm).addClass('ppt')
                                // elm.style.backgroundImage = "url('../images/shop.png');
                                // console.log(elm)
                        })
                    }



                }

            })
        }

    }
});
n