let hello = 'Hello';

let greet = (name) => {
    console.log(`${hello},${name}`);
};

let say = () => {
    console.log('say');
}


module.exports = {
    greet,
    say
};