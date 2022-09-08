const isPolindrome = (e) => {
    const length = e.length;
    for (let i = 0; i < length / 2; i++) {
        if (e[i] !== e[length - 1 - i]) {
            return "Bu palindromdur."
        }
    }
    return "Bu palindrom deyil"
}
const value = isPolindrome("ənənə");