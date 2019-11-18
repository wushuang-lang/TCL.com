require.config({
    paths: {
        jquery: "./jquery",
        product: "./product",
        cookie: "./cookie"
    },
    shim: {}
});


require(['jquery', 'product'], function($, product) {
    product.render(function(id, price) { // 渲染页面
        $('.add').on('click', function() {
            product.addItem(id, price, $('.num').val());
        });
    });
});