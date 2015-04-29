'use strict';

// 在require函数中可以使用相对路径引用文件
// 注意：不可以省略后缀名
exports.views = require('./views.js');
exports.links = require('./links.js');

exports.active = function(name){
    var items = document.querySelectorAll('#menu-list a[data-page]');
    each(items, function(item){
        var page = item.getAttribute('data-page');
        if(page === name){
            item.className = 'active';
        } else {
            item.className = '';
        }
    });
};

/**
 * 渲染menu模块
 * @param {HTMLElement} dom
 */
exports.render = function(dom){
    // 使用__inline函数嵌入其他文件、图片。这里用作内嵌模板，
    // scrat已经配置了对handlebars后置的文件进行预编译，因此
    // 可以直接内嵌这里文件当做js函数执行
    var tpl = __inline('menu.tpl');

    // 使用模板+数据得到html
    dom.innerHTML = tpl;

    var isSupportTouch = !!('ontouchend' in document);
    var eventType = isSupportTouch ? 'touchend' : 'click';
    // 绑定事件
    document.getElementById('menu-switch').addEventListener(eventType, function(e){
        e.stopPropagation();
        e.preventDefault();
        var clazz = ' ' + document.body.className;
        if(/\sshow-menu-list\b/.test(clazz)){
            clazz = clazz.replace(/\s+show-menu-list/, '');
        } else {
            clazz = clazz + ' show-menu-list';
        }
        document.body.className = clazz.trim();
    }, false);
    document.body.addEventListener(eventType, function(){
        var clazz = ' ' + document.body.className;
        if(/\sshow-menu-list\b/.test(clazz)){
            document.body.className = clazz.replace(/\s+show-menu-list/, '').trim();
        }
    }, false);
};