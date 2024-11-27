const fs = require('fs');
const path = require('path');

// 读取歌词数据
const lyrics = JSON.parse(fs.readFileSync(path.join(__dirname, '../lyrics.json')));

module.exports = (req, res) => {
  const randomIndex = Math.floor(Math.random() * lyrics.length);
  const randomLyric = lyrics[randomIndex];
  // 添加 CORS 头
  res.setHeader('Access-Control-Allow-Origin', '*'); // 允许所有域名发起的请求
  res.setHeader('Access-Control-Allow-Methods', 'GET'); // 允许的请求方法

  // 返回多个字段，包括歌词、歌曲名、艺术家
  res.status(200).json({
    content: randomLyric.content,
    works: randomLyric.works,
    author: randomLyric.author,
    date: randomLyric.date
  });
};
