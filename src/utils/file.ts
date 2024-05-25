export const fileSizeToString = (size: number): string => {
    if (size < 1024) {
        return `${size} bytes`;
    } else if (size < 1048576) {
        return `${(size / 1024).toFixed(1)} KB`;
    } else if (size < 1073741824) {
        return `${(size / 1048576).toFixed(1)} MB`;
    } else {
        return `${(size / 1073741824).toFixed(1)} GB`;
    }
};

export function dataURLtoFile(dataurl: string, filename: string, fallbackMimeType = 'image/png') {
    const arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)?.at(1) || fallbackMimeType,
        bstr = atob(arr[arr.length - 1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], `${filename}.${mime.split('/').at(1)}`, { type: mime });
}
