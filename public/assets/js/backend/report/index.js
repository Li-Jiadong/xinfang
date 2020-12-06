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
                smartDisplay:false,
                pageList:[10,25,50,100],
                sortName: 'ID',
                sortOrder:"asc",
                columns: [
                    [
                        {checkbox: true},
                        {field: 'ID', title: __('Id'), sortable:true,operate: false, formatter:function (value,row,index)
                        {
                            var options = table.bootstrapTable('getOptions');
                            var pageNumber = options.pageNumber;
                            var pageSize = options.pageSize;
                            return (pageNumber - 1) * pageSize + 1 + index;
                        }},
                        {field: 'time', title: __('Time'),sortable:true,operate: false,formatter: Table.api.formatter.datetime, datetimeFormat:"YYYY-MM-DD"},
                        {field: 'BH', title: __('Bh'),operate: false},
                        {field: 'XFFS', title: __('Xffs'), operate: 'LIKE'},
                        {field: 'XFR', title: __('Xfr'), width:'100px',operate: 'LIKE'},
                        {field: 'SJDX', title: __('Sjdx'), operate: 'LIKE'},
                        {field: 'ZW', title: __('Zw'), operate: 'LIKE'},
                        {field: 'ZZMW', title: __('Zzmw'), operate: 'LIKE'},
                        {field: 'WTZY', title: __('Wtzy'),width:'150px',operate: 'LIKE'},
                        {field: 'WJLX', title: __('Wjlx'), operate: 'LIKE'},
                        {field: 'BJQK', title: __('Bjqk'), operate: 'LIKE'},
                        {field: 'CZFS', title: __('Czfs'), operate: 'LIKE'},
                        {field: 'DZJL', title: __('Dzjl'), width:'100px',operate: 'LIKE'},
                        {field: 'remark', title: __('remark'),width:'100px',operate: false},
                        {field: 'JBRY', title: __('Jbry'), operate: 'LIKE'},
                        {field: 'operate', title: __('Operate'), table: table,width:'150px',
                         events: Table.api.events.operate, 
                         buttons:[
                            {name: 'upload', text: __('附件'), classname: 'btn btn-xs btn-primary btn-success btn-upload  btn-addtabs', url: 'report/attachment/index', callback: function (data){}},
                         ],
                         formatter: Table.api.formatter.operate}
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