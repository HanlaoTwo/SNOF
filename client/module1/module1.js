/**
 * Created by hanqian18790 on 2017/2/14.
 */
(function () {
    'use strict';

    angular
        .module('module1')
        .controller('Module1Ctrl', Module1Ctrl)
        .directive('innerContent', innerContent);


    function innerContent() {
        return {
            template: '{{vm.mdContent}}'
        };
    }

    function Module1Ctrl() {
        var vm = this;
        vm.mdContent = "it is your content area";
        vm.list_open = true;
        vm.list_close = false;
        vm.hello = "lallalala";
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
        }
        vm.showBlog = function (el) {
            console.log("lalllalallalal");
            vm.mdContent = "hahahahahahah"
        }
    }
})();
