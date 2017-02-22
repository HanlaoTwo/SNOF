/**
 * Created by hanqian18790 on 2017/2/15.
 */

require.config({

    //path映射那些不直接放置于baseUrl下的模块名
    paths: {
        "angular":"lib/angular/angular.min",
        "angularRoute":"lib/angular-route/angular-route",
        //"bootstrap":"",
        "myapp":"app.module",
        "appConfig":"app.config",
        "module1":"module1/module1.module",
        "module1Ctrl":"module1/module1",
        "module2":"module2/module2.module",
        //"module2Ctrl":"module2/module2",

    },
    //shim: 为那些没有使用define()来声明依赖关系、设置模块的"浏览器全局变量注入"型脚本做依赖和导出配置。
    shim: {
        "angular": {
            exports: "angular"
        },
        "angularRoute": {
            deps: ['angular'],
            exports: "angularRoute"
        },


        "module1": {
            deps: ['angular'],
            exports: "module1"
        },
        "module1Ctrl": {
            deps: ['angular'],
            exports: "module1Ctrl"
        },
        "module2": {
            deps: ['angular'],
            exports: "module2"
        },
        "myapp": {
            deps: ['angular','angularRoute',"module1","module2"],
            exports: "myapp"
        },
        "appConfig": {
            deps: ['myapp'],
            exports: "appConfig"
        }
    }
});

require(
    [
        "angular",
        "angularRoute",

        "myapp",
        "appConfig",
        "module1",
        "module1Ctrl",
        "module2"
    ], function (angular) {
        console.log("----------");
        angular.bootstrap(document, ["myapp"]);
    });