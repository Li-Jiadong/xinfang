define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'report/index' + location.search,
                    add_url: 'report/add',
                    edit_url: 'report/edit',
                    del_url: 'report/del',
                    multi_url: 'report/multi',
                    import_url: 'report/import',
                    table: 'report',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'ID',
                sortName: 'ID',
                sortOrder:"asc",
                columns: [
                    [
                        {checkbox: true},
                        {field: 'ID', title: __('Id'), sortable:true, formatter:function (value,row,index)
                        {
                            return index+1;
                        }},
                        {field: 'time', title: __('Time'), operate: 'RANGE',formatter: Table.api.formatter.datetime, datetimeFormat:"YYYY-MM-DD"},
                        {field: 'BH', title: __('Bh'), operate: 'LIKE'},
                        {field: 'XFFS', title: __('Xffs'), operate: 'LIKE'},
                        {field: 'XFR', title: __('Xfr'), operate: 'LIKE'},
                        {field: 'SJDX', title: __('Sjdx'), operate: 'LIKE'},
                        {field: 'ZW', title: __('Zw'), operate: 'LIKE'},
                        {field: 'ZZMW', title: __('Zzmw'), operate: 'LIKE'},
                        {field: 'WTZY', title: __('Wtzy'),width:'150px'},
                        {field: 'WJLX', title: __('Wjlx'), operate: 'LIKE'},
                        {field: 'BJQK', title: __('Bjqk'), operate: 'LIKE'},
                        {field: 'CZFS', title: __('Czfs'), operate: 'LIKE'},
                        {field: 'DZJL', title: __('Dzjl'), operate: 'LIKE'},
                        {field: 'remark', title: __('remark'), operate: 'LIKE',width:'100px'},
                        {field: 'JBRY', title: __('Jbry'), operate: 'LIKE'},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});