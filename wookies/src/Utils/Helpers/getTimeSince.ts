// Copilot wrote this :)
export const timeSince = (_time: string) => {
    let time = new Date(_time).getTime();
    const now = new Date().getTime();
    const diff = now - time;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));
    const seconds = Math.floor(diff / 1000);
    if (days > 0) {
        return `Added ${days} ${days} ago`;
    } else if (hours > 0) {
        return `Added ${hours} hours ago`;
    } else if (minutes > 0) {
        return `Added ${minutes} minutes ago`;
    } else {
        return `Added ${seconds} seconds ago`;
    }
};
