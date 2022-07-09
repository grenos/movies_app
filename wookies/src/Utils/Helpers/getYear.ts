export const getYear = (date: string): string => {
    return new Date(date).getFullYear().toString();
};
