const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const str1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']
const str2 = ['Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 'O', 'N']

readline.question('Enter text to decode: ', (text) => {
    const splitText = text.split('')
    let output = ''
    for (let i = 0; i < splitText.length; i++) {
        for (let j = 0; j < str1.length; j++) {
            if (isEqualsIgnoreCase(splitText[i], str1[j]))
                output += str2[j]
        }

        for (let z = 0; z < str2.length; z++) {
            if (isEqualsIgnoreCase(splitText[i], str2[z]))
                output += str1[z]
        }
    }
    console.log(output)
    readline.close()
})

readline.on('close', () => {
    process.exit(0)
})

const isEqualsIgnoreCase = (v1, v2) => {
    if (v1.toUpperCase() == v2.toUpperCase()) {
        return true
    }

    return false
}
