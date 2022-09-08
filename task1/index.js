const isPolindrome = (e) => {
    const length = e.length;
    for (let i = 0; i < length / 2; i++) {
        if (e[i] !== e[length - 1 - i]) {
            return false
        }
    }
    return true
}

var check = isPolindrome('ənənə')
if (check) {
    console.log('palindromdur')
} else
    console.log('palindrom deyil')