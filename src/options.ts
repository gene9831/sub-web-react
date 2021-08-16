export const targets = [
  'clash',
  'clashr',
  'surge',
  'quan',
  'quanx',
  'mellow',
  'surfboard',
  'loon',
  'ss',
  'ssd',
  'sssub',
  'ssr',
  'v2ray',
  'trojan',
];

const cfgs = [
  {
    label: 'ACL4SSR',
    value: 'ACL4SSR.ini',
  },
  {
    label: 'ACL4SSR_Online_Full_MultiMode',
    value: 'ACL4SSR_Online_Full_MultiMode.ini',
  },
  {
    label: 'ACL4SSR_AdblockPlus',
    value: 'ACL4SSR_AdblockPlus.ini',
  },
  {
    label: 'ACL4SSR_Online_Full_Netflix',
    value: 'ACL4SSR_Online_Full_Netflix.ini',
  },
  {
    label: 'ACL4SSR_BackCN',
    value: 'ACL4SSR_BackCN.ini',
  },
  {
    label: 'ACL4SSR_Online_Full_NoAuto',
    value: 'ACL4SSR_Online_Full_NoAuto.ini',
  },
  {
    label: 'ACL4SSR_Mini',
    value: 'ACL4SSR_Mini.ini',
  },
  {
    label: 'ACL4SSR_Online_Mini',
    value: 'ACL4SSR_Online_Mini.ini',
  },
  {
    label: 'ACL4SSR_Mini_Fallback',
    value: 'ACL4SSR_Mini_Fallback.ini',
  },
  {
    label: 'ACL4SSR_Online_Mini_AdblockPlus',
    value: 'ACL4SSR_Online_Mini_AdblockPlus.ini',
  },
  {
    label: 'ACL4SSR_Mini_MultiMode',
    value: 'ACL4SSR_Mini_MultiMode.ini',
  },
  {
    label: 'ACL4SSR_Online_Mini_Fallback',
    value: 'ACL4SSR_Online_Mini_Fallback.ini',
  },
  {
    label: 'ACL4SSR_Mini_NoAuto',
    value: 'ACL4SSR_Mini_NoAuto.ini',
  },
  {
    label: 'ACL4SSR_Online_Mini_MultiCountry',
    value: 'ACL4SSR_Online_Mini_MultiCountry.ini',
  },
  {
    label: 'ACL4SSR_NoApple',
    value: 'ACL4SSR_NoApple.ini',
  },
  {
    label: 'ACL4SSR_Online_Mini_MultiMode',
    value: 'ACL4SSR_Online_Mini_MultiMode.ini',
  },
  {
    label: 'ACL4SSR_NoAuto',
    value: 'ACL4SSR_NoAuto.ini',
  },
  {
    label: 'ACL4SSR_Online_Mini_NoAuto',
    value: 'ACL4SSR_Online_Mini_NoAuto.ini',
  },
  {
    label: 'ACL4SSR_NoAuto_NoApple',
    value: 'ACL4SSR_NoAuto_NoApple.ini',
  },
  {
    label: 'ACL4SSR_Online_NoAuto',
    value: 'ACL4SSR_Online_NoAuto.ini',
  },
  {
    label: 'ACL4SSR_NoAuto_NoApple_NoMicrosoft',
    value: 'ACL4SSR_NoAuto_NoApple_NoMicrosoft.ini',
  },
  {
    label: 'ACL4SSR_Online_NoReject',
    value: 'ACL4SSR_Online_NoReject.ini',
  },
  {
    label: 'ACL4SSR_NoMicrosoft',
    value: 'ACL4SSR_NoMicrosoft.ini',
  },
  {
    label: 'ACL4SSR_WithChinaIp',
    value: 'ACL4SSR_WithChinaIp.ini',
  },
  {
    label: 'ACL4SSR_Online',
    value: 'ACL4SSR_Online.ini',
  },
  {
    label: 'ACL4SSR_WithChinaIp_WithGFW',
    value: 'ACL4SSR_WithChinaIp_WithGFW.ini',
  },
  {
    label: 'ACL4SSR_Online_AdblockPlus',
    value: 'ACL4SSR_Online_AdblockPlus.ini',
  },
  {
    label: 'ACL4SSR_WithGFW',
    value: 'ACL4SSR_WithGFW.ini',
  },
  {
    label: 'ACL4SSR_Online_Full',
    value: 'ACL4SSR_Online_Full.ini',
  },
  {
    label: 'ACL4SSR_Online_Full_AdblockPlus',
    value: 'ACL4SSR_Online_Full_AdblockPlus.ini',
  },
  {
    label: 'ACL4SSR_Online_Full_Google',
    value: 'ACL4SSR_Online_Full_Google.ini',
  },
];

cfgs.sort((a, b) => {
  if (a.value < b.value) return -1;
  else if (a.value > b.value) return 1;
  else return 0;
});

export const configs = [
  {
    label: '无',
    value: '',
  },
  ...cfgs,
];

export const hosts = [
  {
    label: 'https://oneapp.top:8080',
    value: 'https://oneapp.top:8080',
  },
  {
    label: 'http://127.0.0.1:25500',
    value: 'http://127.0.0.1:25500',
  },
  {
    label: '自定义',
    value: 'custom',
  },
];
