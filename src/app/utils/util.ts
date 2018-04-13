export const timeago = date => {

    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const month = 31 * day;
    const year = 12 * month;

    let diff = Date.now() - date.getTime();

    if (diff > year) {
        return  (diff / year).toFixed(0) + "年前";
    }
    if (diff > month) {
        return (diff / month).toFixed(0) + "个月前";
    }
    if (diff > day) {
        return (diff / day).toFixed(0) + "天前";
    }
    if (diff > hour) {
        return (diff / hour).toFixed(0) + "小时前";
    }
    if (diff > minute) {
        return (diff / minute).toFixed(0) + "分钟前";
    }
    return "刚刚";
}