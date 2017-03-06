/**
 *  Created by hanqian18790 on 2017/2/14.
 */
(function () {
    'use strict';

    angular
        .module('module1')
        .controller('Module1Ctrl', ['$sce',Module1Ctrl])
        .directive('innerContent', innerContent);


    function innerContent() {
        return {
            template: '{{vm.mdContent}}'
        };
    }

    function Module1Ctrl($sce) {
        var vm = this;
        vm.mdContent = "";
        vm.list_open = true;
        vm.list_close = false;
        vm.tree = {};


        vm.listfiles = function () {
            $.ajax({
                type: "GET",
                url: "../cgi-bin/listFiles.py",
                data: {},
                dataType: "json",
                success: function (data) {
                    vm.tree = data;
                    console.log(data.dirs[0].name);
                }
            });
        };

        vm.listfiles();

        vm.showul = function () {
            vm.show = !vm.show;
        };

        vm.showBlog = function (el) {
           var str = 'Run `grunt` for building and `grunt serve` for preview.' +'\n'+
               '## Build & development';
            vm.mdContent = $sce.trustAsHtml(vm.convertMD(str));
        };

        vm.convertMD = function (md) {
            var converter = new showdown.Converter(),
                html = converter.makeHtml(md);
            return html;
        };

        vm.showBlog();
    }
})();
