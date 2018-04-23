import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: '工作台',
    icon: 'iconfont icon-_shouye',
    link: '/pages/dashboard',
    home: true,
  },
  // {
  //   title: '功能',
  //   group: true,
  // },
  {
    title: '设备管理',
    icon: 'iconfont icon-_shebeiguanli',
    children: [
      {
        title: 'CMTS',
        link: '/pages/equ-manage/cmts',
      },{
        title: 'DCMTS',
        link: '/pages/equ-manage/dcmts',
      },
    ]
  },
  {
    title: '告警管理',
    icon: 'iconfont icon-_gaojingguanli',
  },
  {
    title: '运维管理',
    icon: 'iconfont icon-_yunweiguanli',
  },
  {
    title: '报表管理',
    icon: 'iconfont icon-_baobiaoguanli',
  },
  {
    title: '资源管理',
    icon: 'iconfont icon-_ziyuanguanli',
  },
  {
    title: '系统设置',
    icon: 'iconfont icon-_xitongshezhi',
  }
];
