const fs = require('fs');
const path = require('path');

// 读取歌词数据
const lyrics = JSON.parse(fs.readFileSync(path.join(__dirname, '../lyrics.json')));

module.exports = (req, res) => {
  const randomIndex = Math.floor(Math.random() * lyrics.length);
  const randomLyric = lyrics[randomIndex];

  // 返回多个字段，包括歌词、歌曲名、艺术家
  res.status(200).json({
    content: randomLyric.content,
    works: randomLyric.works,
    author: randomLyric.author,
    date: randomLyric.date
  });
};
