// 暫定版としての現在日付取得フォーマット
export const nowDate = () => {
  const now = new Date();
  const isoNow = now.toISOString();
  return isoNow;
};

export const displayDateFormat = (dateString: string) => {
  const date = new Date(dateString);

  const mm = date.getMonth() + 1;
  const time =
    ('0' + date.getHours()).slice(-2) +
    ':' +
    ('0' + date.getMinutes()).slice(-2) +
    ':' +
    ('0' + date.getSeconds()).slice(-2);
  const dd = date.getDate();
  const hh = date.getHours();
  const min = date.getMinutes();
  return `${mm}月${dd}日 ${time}`;
};
