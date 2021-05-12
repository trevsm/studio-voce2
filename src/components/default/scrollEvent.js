export function scrollEvent(scrolled, setScrolled) {
    if (window.pageYOffset > 20) {
        if (!scrolled) setScrolled(true)
    } else {
        setScrolled(false)
    }
}
