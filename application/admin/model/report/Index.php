<?php

namespace app\admin\model\report;

use think\Model;


class Index extends Model
{

    

    

    // 表名
    protected $name = 'report';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 定义时间戳字段名
    protected $createTime = false;
    protected $updateTime = false;
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'time_text',
        'WTXZ_text',
        'XFFS_text'
    ];
    

    
    public function getWtxzList()
    {
        return ['0' => __('Wtxz 0'), '1' => __('Wtxz 1'), '2' => __('Wtxz 2')];
    }

    public function getXffsList()
    {
        return ['0' => __('Xffs 0'), '1' => __('Xffs 1'), '2' => __('Xffs 2'), '3' => __('Xffs 3'), '4' => __('Xffs 4')];
    }


    public function getTimeTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['time']) ? $data['time'] : '');
        return is_numeric($value) ? date("Y-m-d H:i:s", $value) : $value;
    }


    public function getWtxzTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['WTXZ']) ? $data['WTXZ'] : '');
        $list = $this->getWtxzList();
        return isset($list[$value]) ? $list[$value] : '';
    }


    public function getXffsTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['XFFS']) ? $data['XFFS'] : '');
        $list = $this->getXffsList();
        return isset($list[$value]) ? $list[$value] : '';
    }

    protected function setTimeAttr($value)
    {
        return $value === '' ? null : ($value && !is_numeric($value) ? strtotime($value) : $value);
    }


}
