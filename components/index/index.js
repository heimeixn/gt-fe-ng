'use strict';


function LetterCtrl($scope) {
    $scope.welcome = "欢迎";
    console.log('yes');
}

module.exports = ['$scope', LetterCtrl]
// require依赖的文件
var header = require('header');
var menu = require('menu');
var footer = require('footer');

// 内部变量
var lastView, timer;

// 定义页面和模块对应关系
var views = {
    '404': 'pages/404',
    'index': 'pages/index'
};

$.each(menu.views, function(view){
    views[view.name] = view.module || ('pages/' + view.name);
});

/**
 * 注册页面
 * @param {String|Object} name 页面名
 * @param {String|undefined} moduleName 模块名
 */
var indexUtil = {
    register  : function(name, moduleName){
        switch(typeof name){
            case 'string':
                views[name] = moduleName;
                break;
            case 'object':
                extend(views, name);
                break;
        }
    },
    /**
     * 判断页面是否注册
     * @param {String} name 页面名
     * @returns {boolean}
     */
    has : function(name){
        return views.hasOwnProperty(name);
    },
    /**
     * 渲染页面骨架
     * @param {HTMLElement} dom
     */
    render : function(dom){
        // 使用__inline函数嵌入其他文件、图片。这里用作内嵌模板，
        // scrat已经配置了对handlebars后置的文件进行预编译，因此
        // 可以直接内嵌这里文件当做js函数执行

        //渲染头部
        header.render($('#site-header')[0]);
        // 渲染menu模块
        menu.render($('#site-menu')[0]);
        // 渲染footer模块
        footer.render($('#site-footer')[0]);
        console.log('render done');
    },
    /**
     * 设置页面title
     * @param {String} title
     */
    title : function(title){
        document.title = title;
    }
};

indexUtil.render(document.body);
