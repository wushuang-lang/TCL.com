// let baseUrl = "http://localhost:8080/1910/day36/shopcar";

define(['jquery', 'cookie'], function($, cookie) {
    return {
        render: function(callback) {
            let id = location.search.split('=')[1];
            $.ajax({
                url: `http://127.0.0.1:8080/TCL/src/lib/getitem.php`,
                type: 'get',
                data: {
                    id: id
                },
                dataType: 'json',
                success: function(res) {
                    let pic = JSON.parse(res.pic);
                    let tempstr = `
                
                        <div class="bg">
                        <div class="bg-panner">
                            <a href="">TCL官网 ></a>
                            <a href="">${res.title}</a>
                        </div>
                        
                    </div>
            
                        <div class="section"> 
                    
                     <div class="section-left" id="tabs">
            
                             <div data-type="tabs" class="show"> <img src="..${pic[2].src}" alt=""></div>
            
                            <div data-type="tabs"> <img src="..${pic[3].src}" alt=""></div>
            
                            <div data-type="tabs"> <img src="..${pic[4].src}" alt=""></div>
                            <div data-type="tabs"> <img src="..${pic[5].src}" alt=""></div>
                            <ul>
                                <li class="active"><img src="..${pic[2].src}" alt=""></li>
                                <li><img src="..${pic[3].src}" alt=""></li>
                                <li><img src="..${pic[4].src}" alt=""></li>
                                <li><img src="..${pic[5].src}" alt=""></li>
                            </ul>
                            <script>
                                $(function() {
                                    $('#tabs>ul>li').on('click', function() {
                                        $(this).addClass('active').siblings().removeClass('active');
                                        var index = $('#tabs>ul>li').index(this);
                                        $('#tabs>div').eq(index).addClass('show').siblings().removeClass('show')
                                    })
                                })
                            </script>
                        </div> 
                  
                        <div class="section-right">
                            <div class="hed">
                                <h1 class="hed-name">
                                    <span>
                                    ${res.title}
                                    </span>
                                </h1>
                                <div class="hed-item">
                                    <p>   ${res.details}</p>
                                    <span>收藏</span>
                                </div>
                                <div class="hed-f">
                                    <span>
                                            可获取积分：<em>${res.num}</em>
                                    </span>
            
                                </div>
                            </div> 
                        <div class="purc">
                                <p>
                                    促销价：<span>
                                    ${res.num}.00
                                    </span><em>元</em>
                                </p>
                                <span class="rmb">
                                        RMB：<a>${res.u_rmb}</a>.00元
            
                                </span>
                                <em class="phone">
                                    手机购买
                                </em>
                            </div>
                            </div>
                            <div class="set">
                                <div class="sele">对开双门系列</div>
                                <div class="options">
                                    <span>65吋100H</span>
                                    <span>65吋100T</span>
                                    <span>55吋100U</span>
                                </div>
                            </div>
                            <div class="purc-text">
                            <input type="number" value="1" min="1" class="number">
                            <input type="button" value="立即购买">
                            <input type="button" value="加入购物车" class="add" id="btn">
                        </div>
                        <div class="fuwu">
                服务：全国联保 | 7天退换货 | 积分抵扣 | 包邮(偏远地区除外)
            </div>
        </div>
        <div class="details">

            <ul>
                <li><a href="">产品介绍</a></li>
                <li><a href="">规格参数</a></li>
                <li><a href="">服务政策</a></li>
                <li><a href="">常见问题</a></li>
                <li><a href="">评价（0）</a></li>
            </ul>
        </div>

       
        <div class="box">
        <div class="box-panner">
            <img src="..${pic[6].src}" alt="">
            <img src="..${pic[7].src}" alt="">
            <img src="..${pic[8].src}" alt="">
            <img src="..${pic[9].src}" alt="">
        </div>
    </div>

                    `;

                    $('.maxbox').append(tempstr);
                    callback && callback(res.id, res.num);
                }
            })
        },
        addItem: function(id, num, number) {
            location.href = "shopcar.html";
            // console.log(id, num, number)

            let shop = cookie.get('shop'); // 获取cookie数据 判断是否存在
            // 如果有cookie  修改cookie
            // 如果有cookie  添加cookie

            let product = {
                id: id,
                num: num,
                number: number
            };

            if (shop) {
                shop = JSON.parse(shop);
                if (shop.some(elm => elm.id == id)) {
                    shop.forEach(elm => {
                        elm.id == id ? elm.number = number : null;
                    });
                } else {
                    shop.push(product);
                }
            } else {
                shop = []; // 购物车没有内容 新建一个购物车
                shop.push(product); //将商品放入购物车
            }
            cookie.set('shop', JSON.stringify(shop), 1);

        }

    }

});