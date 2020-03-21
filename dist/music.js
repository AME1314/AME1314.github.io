const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    // mini: true,
    autoplay: false,
    listFolded: true,
    preload: 'auto',
    mutex: true,
    // theme: '#FADFA3', //列表标签颜色,audio有设置theme这个就会失效
    loop: 'all',
    lrcType: 1,
    // volume: 0.7, //默认音量
    audio: [{
        name: '缺氧',
        artist: '安苏羽',
        url: 'http://isure.stream.qqmusic.qq.com/C4000003hYid3cgKrK.m4a?guid=4056094263&vkey=99E41F9FF5ED09D14C3F65E1F2A32B43532E7B54994D304DC6F42EB5812D0CB2336E22E1AE6E1FE7577C576878A7CF6B0332CE7D373C9C1B&uin=6368&fromtag=66',
        cover: 'https://upload-images.jianshu.io/upload_images/10646648-77abbbe16f28aefb.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
        lrc:'../music/lrc/queyang.txt'
      },
      {
        name: "把孤独当做晚餐",
        artist: '井胧',
        url: 'http://isure.stream.qqmusic.qq.com/C400000STsvn0AXtPb.m4a?guid=4056094263&vkey=BF2C772E91DF0C35B340466B757E68B69335567C472F0E9DCAC5C760052A213A117335AEEA15CF329A322E7BB1A614AE179AC73868E92D5B&uin=6368&fromtag=66',
        cover: 'https://upload-images.jianshu.io/upload_images/10646648-c151bfa9989926d3.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
        lrc:'../music/lrc/bgddzwc.txt'
      }
    ]
  });
  