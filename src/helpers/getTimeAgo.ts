// İyileştirilmiş ve modern fonksiyon
export default function formatTimeAgo(
  timeString: string,
  lang: string = "en" // Opsiyonel dil parametresi
): string {
  const date = new Date(timeString);
  const now = new Date();

  // İki tarih arasındaki farkı saniye cinsinden al
  const seconds = Math.round((now.getTime() - date.getTime()) / 1000);

  // Farklı zaman dilimleri
  const MINUTE = 60;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const WEEK = 7 * DAY;
  const MONTH = 30 * DAY; // Ortalama bir değer
  const YEAR = 365 * DAY; // Ortalama bir değer

  // Intl.RelativeTimeFormat için formatlayıcıyı oluştur
  const rtf = new Intl.RelativeTimeFormat(lang, { numeric: "auto" });

  // Farkın büyüklüğüne göre doğru birimi seç ve formatla
  if (seconds < MINUTE) {
    return rtf.format(-seconds, "second");
  } else if (seconds < HOUR) {
    const minutes = Math.floor(seconds / MINUTE);
    return rtf.format(-minutes, "minute");
  } else if (seconds < DAY) {
    const hours = Math.floor(seconds / HOUR);
    return rtf.format(-hours, "hour");
  } else if (seconds < WEEK) {
    const days = Math.floor(seconds / DAY);
    return rtf.format(-days, "day");
  } else if (seconds < MONTH) {
    const weeks = Math.floor(seconds / WEEK);
    return rtf.format(-weeks, "week");
  } else if (seconds < YEAR) {
    const months = Math.floor(seconds / MONTH);
    return rtf.format(-months, "month");
  } else {
    const years = Math.floor(seconds / YEAR);
    return rtf.format(-years, "year");
  }
}
