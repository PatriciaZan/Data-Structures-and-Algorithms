// 1. Convert string to array
// 2. Reverse the array
// 3. Convert array back to string

const reverse = (string) => {
    const reverse = string.split('').reverse().join('');
    console.log(reverse);
}

reverse('string')
reverse('patricia')