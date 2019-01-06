const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
	loop: 'all',      <!-- 音频循环播放, 可选值: 'all', 'one', 'none'-->
	order: 'list',    <!-- 音频循环顺序, 可选值: 'list', 'random'-->
	preload: 'auto',        <!-- 预加载，可选值: 'none', 'metadata', 'auto'-->
	lrcType: 0,             <!-- 歌词类型，0表示不显示歌词-->
	listMaxHeight: '120px', <!-- 列表最大高度，超出此高度将有滚动条-->
    audio: [
	  {
		name: 'Fall In Love',
		artist: 'RamZi',
		url: ' http://dl.stream.qqmusic.qq.com/M800002XGNT83xVF2b.mp3?vkey=877545527522581E20D426C62FC5155C6182BD43231DC6490499B66BC22692CD48EAB09FBC4AD8B1630C0B2A4AB983D5D2B8A90643698E9E&guid=5150825362&fromtag=1',
		cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003EUBHE15TqRW.jpg?max_age=2592000',
		theme: '#46718b'                       <!-- 选中歌曲的主题-->
	  },
      {
        name: '不能说的秘密',
        artist: '周杰伦',
        url: 'http://www.ytmp3.cn/down/32336.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R150x150M000001UP7mW458ipG.jpg?max_age=2592000',
		theme: '#46718b'  
      },
      {
        name: '让我留在你身边',
        artist: '陈奕迅',
        url: 'http://www.ytmp3.cn/down/35736.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000019Kyrr4RyQPS.jpg?max_age=2592000',
		theme: '#46718b'                       <!-- 选中歌曲的主题-->
      },
	  {
		name: '那谁',
		artist: '苏永康',
		url: ' http://dl.stream.qqmusic.qq.com/M8000029kM0W3W3wWH.mp3?vkey=966E59842E7FA605291AA408C1545094AB2B51A9B7294E2FA9AEA20A9E17AE79E29DFF35A2CD0614879F3C64B13B592B98426545964DEF13&guid=5150825362&fromtag=1',
		cover: 'http://star.kuwo.cn/star/starheads/180/88/55/1611395709.jpg',
		theme: '#46718b'                       <!-- 选中歌曲的主题-->
	  }
	]
});