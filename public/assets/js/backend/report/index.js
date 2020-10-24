define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'report/index/index' + location.search,
                    add_url: 'report/index/add',
                    edit_url: 'report/index/edit',
                    del_url: 'report/index/del',
                    multi_url: 'report/index/multi',
                    import_url: 'report/index/import',
                    table: 'report',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'ID',
                sortName: 'ID',
                search:false,
                showToggle: false,
                showColumns: false,
                columns: [
                    [
                        {checkbox: true},
                        {field: 'ID', title: __('Id')},
                        {field: 'time', title: __('Time'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        {field: 'XFR', title: __('Xfr'), operate: 'LIKE'},
                        {field: 'ZW', title: __('Zw'), operate: 'LIKE'},
                        {field: 'DW', title: __('Dw'), operate: 'LIKE',require:false},
                        {field: 'WTXZ', title: __('Wtxz'), searchList: {"0":__('Wtxz 0'),"1":__('Wtxz 1'),"2":__('Wtxz 2')}, formatter: Table.api.formatter.normal},
                        {field: 'XFFS', title: __('Xffs'), searchList: {"0":__('Xffs 0'),"1":__('Xffs 1'),"2":__('Xffs 2'),"3":__('Xffs 3'),"4":__('Xffs 4')}, formatter: Table.api.formatter.normal},
                        {field: 'NRZY', title: __('内容摘要'), operate: false,},
                        {field: 'SJRY', title: __('Sjry'), operate: 'LIKE'},
                        {field: 'SJRYZW', title: __('Sjryzw'), operate: 'LIKE'},
                        {field: 'SJRYDW', title: __('Sjrydw'), operate: 'LIKE'},
                        {field: 'CLQK', title: __('处理情况'), operate: false,},
                        {field: 'remark', title: __('备注'), operate: false,},
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