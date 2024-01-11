// 暫定版としての現在日付取得フォーマット
export const nowDate = () => {
  const now = new Date();
  const mm = now.getMonth() + 1;
  const time =
    ('0' + now.getHours()).slice(-2) +
    ':' +
    ('0' + now.getMinutes()).slice(-2) +
    ':' +
    ('0' + now.getSeconds()).slice(-2);
  const dd = now.getDate();
  const hh = now.getHours();
  const min = now.getMinutes();
  return `${mm}月${dd}日 ${time}`;
};
