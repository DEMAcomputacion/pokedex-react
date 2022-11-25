export default function urlToId(url) {
    return (url.slice(34)).slice(0, -1)
}