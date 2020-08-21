export const bytesToReadable = (size: number): string => {
    const UNITS = ['kB', 'MB', 'GB']
    let i = -1
    let mutableSize = size
    do {
        mutableSize = mutableSize / 1024
        i++
    } while (mutableSize > 1024)

    return `${Math.max(mutableSize, 0.1).toFixed(1)} ${UNITS[i]}`
}