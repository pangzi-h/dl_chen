<?php

namespace app\api\controller\v1;

use app\common\controller\Api;
use think\Db;

class Ppm extends Api
{
    protected $noNeedLogin = 'index';
    protected $noNeedRight = 'index';

    public function index()
    {
        $source = Db::table('fa_auth_rule')->select();
        $this->success('', [
            'dataset' => [
                [
                    'source' => [
                        ['day' => "周一", 'num' => 1],
                        ['day' => "周二", 'num' => 2],
                        ['day' => "周三", 'num' => 3],
                        ['day' => "周四", 'num' => 4],
                        ['day' => "周五", 'num' => 4],
                        ['day' => "周六", 'num' => 4],
                        ['day' => "周七", 'num' => 4],
                    ],
                ],
                [
                    'source' => [
                        ['day' => "周一", 'num' => 2],
                        ['day' => "周二", 'num' => 4],
                        ['day' => "周三", 'num' => 5],
                        ['day' => "周四", 'num' => 2],
                        ['day' => "周五", 'num' => 1],
                        ['day' => "周六", 'num' => 6],
                        ['day' => "周七", 'num' => 2],
                    ],
                ],
            ],
        ]);
    }
}