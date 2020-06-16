const foo = () => {
    console.log("hey");
    bar();
}
const bar = () => {
    console.log("hello");
    setTimeout(() => {
        console.log("IM executed at last");
    }, 2000);
    baz();
}
const baz = () => {
    console.log("hii");
}
foo();