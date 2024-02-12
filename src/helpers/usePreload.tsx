const images = []

export default function usePreload() {
    const preloadImages = (sources: string[]) =>
        sources.map(source => images.push(new Image().src = source))

    return { preloadImages }
}
