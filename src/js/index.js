let baseURL = "http://127.0.0.1:8080/TCL";

define(['jquery'], function($) {
    return {
        render: function() {
            $.ajax({
                type: "get",
                // url: "../lib/main.php",
                url: "http://127.0.0.1:8080/TCL/src/lib/main.php",
                dataType: "json",
                success: function(data) {
                    let temp = '';
                    data.forEach((elem, i) => {
                        let pic = JSON.parse(elem.pic);
                        temp += ` <li class="item">
                             <img class="hot-img" src="..${pic[0].src}" alt="">
                             <a href="http://127.0.0.1:8080/TCL/src/html/product.html?id=${elem.id}">
                         <div class="p-pic">
                            <img src="..${pic[1].src}" alt="">
                         </div>
                        <div class="p-title">
                            ${elem.title}
                        </div>
                        <div class="p-dice">
                       ${elem.dice}
                        </div>
                        <div class="p-price">
                        ${elem.num}.00元
                        </div>
            </a>
        </li> `;
                    });
                    $('.tv-right>.list').append(temp)
                }
            });
        },
        // 空调
        rende: function() {
            $.ajax({
                type: "get",
                url: "http://127.0.0.1:8080/TCL/src/lib/main-cond.php",
                dataType: "json",
                success: function(data) {
                    let temp = '';
                    data.forEach((elem, i) => {
                        let pic = JSON.parse(elem.pic);
                        temp += ` <li class="item">
                                 <img class="hot-img" src="..${pic[0].src}" alt="">
                                 <a href="http://127.0.0.1:8080/TCL/src/html/product.html?id=${elem.id}">
                             <div class="p-pic">
                                <img src="..${pic[1].src}" alt="">
                             </div>
                            <div class="p-title">
                                ${elem.title}
                            </div>
                            <div class="p-dice">
                           ${elem.dice}
                            </div>
                            <div class="p-price">
                               ${elem.num}.00元
                            </div>
                </a>
            </li>
                            `;
                    });
                    $('.listt').append(temp)
                }
            });
        },
        // 冰箱
        rend: function() {
            $.ajax({
                type: "get",
                url: "http://127.0.0.1:8080/TCL/src/lib/main-ice.php",
                dataType: "json",
                success: function(data) {
                    let temp = '';
                    data.forEach((elem, i) => {
                        let pic = JSON.parse(elem.pic);
                        temp += ` <li class="item">
                             <img class="hot-img" src="..${pic[0].src}" alt="">
                             <a href="http://127.0.0.1:8080/TCL/src/html/product.html?id=${elem.id}">
                         <div class="p-pic">
                            <img src="..${pic[1].src}" alt="">
                         </div>
                        <div class="p-title">
                            ${elem.title}
                        </div>
                        <div class="p-dice">
                       ${elem.dice}
                        </div>
                        <div class="p-price">
                       ${elem.num}.00元
                        </div>
            </a>
        </li>
                        `;
                    });
                    $('.listl').append(temp)
                }
            });
        },
        // 洗衣机
        rent: function() {
            $.ajax({
                type: "get",
                url: "http://127.0.0.1:8080/TCL/src/lib/main-wash.php",
                dataType: "json",
                success: function(data) {
                    let temp = '';
                    data.forEach((elem, i) => {
                        let pic = JSON.parse(elem.pic);
                        temp += ` <li class="item">
                     <img class="hot-img" src="..${pic[0].src}" alt="">
                     <a href="http://127.0.0.1:8080/TCL/src/html/product.html?id=${elem.id}">
                 <div class="p-pic">
                    <img src="..${pic[1].src}" alt="">
                 </div>
                <div class="p-title">
                    ${elem.title}
                </div>
                <div class="p-dice">
               ${elem.dice}
                </div>
                <div class="p-price">
                   ${elem.num}.00元
                </div>
    </a>
</li>
                `;
                    });
                    $('.lis').append(temp)
                }
            });
        },
        kitchen: function() {
            $.ajax({
                type: "get",
                url: "http://127.0.0.1:8080/TCL/src/lib/main-kit.php",
                dataType: "json",
                success: function(data) {
                    let temp = '';
                    data.forEach((elem, i) => {
                        let pic = JSON.parse(elem.pic);
                        temp += ` <li class="item">
                     <img class="hot-img" src="..${pic[0].src}" alt="">
                     <a href="http://127.0.0.1:8080/TCL/src/html/product.html?id=${elem.id}">
                 <div class="p-pic">
                    <img src="..${pic[1].src}" alt="">
                 </div>
                <div class="p-title">
                    ${elem.title}
                </div>
                <div class="p-dice">
               ${elem.dice}
                </div>
                <div class="p-price">
                   ${elem.num}.00元
                </div>
    </a>
</li>
                `;
                    });
                    $('.liso').append(temp)
                }
            });
        },
        parts: function() {
            $.ajax({
                type: "get",
                url: "http://127.0.0.1:8080/TCL/src/lib/main-parts.php",
                dataType: "json",
                success: function(data) {
                    let temp = '';
                    data.forEach((elem, i) => {
                        let pic = JSON.parse(elem.pic);
                        temp += ` <li class="item">
             <img class="hot-img" src="..${pic[0].src}" alt="">
             <a href="http://127.0.0.1:8080/TCL/src/html/product.html?id=${elem.id}">
         <div class="p-pic">
            <img src="..${pic[1].src}" alt="">
         </div>
        <div class="p-title">
            ${elem.title}
        </div>
        <div class="p-dice">
       ${elem.dice}
        </div>
        <div class="p-price">
          ${elem.num}.00元
        </div>
</a>
</li>
        `;
                    });
                    $('.lisaa').append(temp)
                }
            });
        }














    }


});