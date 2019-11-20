require.config({
    paths: {
        jquery: "./jquery",
        cookie: "./cookie",
        shopcar: "./shop"
    },
    shim: {}
});

require(['jquery', 'shop'], function($, shop) {
    shop.render();
    shop.rend();
    shop.bing()

});