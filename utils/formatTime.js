const formatTime = timeStamp => {
  //将毫秒转为秒
  timeStamp = timeStamp/1000
  //不足60秒的剩余秒数
  const second = Math.floor(timeStamp%60);
  //不足60分钟的剩余分钟数
  const minute = Math.floor(timeStamp/60%60);
   //不足24小时的的剩余小时数
  const hour = Math.floor(timeStamp/60/60%24);
  return [hour, minute, second].map(formatNumber)
  // return [hour, minute, second].map(formatNumber).join(':')
};

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
};

module.exports = {
  formatTime: formatTime
}