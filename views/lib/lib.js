/*
 * 使用__inline函数来嵌入其他文件
 */
__inline('jquery/jquery.js');
 __inline('scrat/scrat.js');
__inline('angular/angular.js');
__inline('angular/angular.route.js');
__inline('angular/angular.resource.js');
__inline('angular/angular.sanitize.js');
__inline('angular/angular.frame.js');

require.config(__FRAMEWORK_CONFIG__);

__inline('../boot/route.js');
__inline('../boot/run.js');
__inline('../boot/config.js');
__inline('../boot/app.js');
