/**
     * Created by hanqian18790 on 2017/2/14.
     */
(function () {
    'use strict';

    angular
        .module('module1')
        .controller('Module1Ctrl', Module1Ctrl);

    function Module1Ctrl() {
        var vm = this;
        vm.show = true;
        vm.hello = "lallalala";
        vm.tree = { };
        vm.listfiles = function () {
            $.ajax({
                type: "GET",
                url: "../cgi-bin/listFiles.py",
                data: {},
                dataType: "json",
                success: function(data){
                    vm.tree = data;
                    console.log(vm.tree);
                }
            });
        };
        vm.listfiles();

    }
})();
