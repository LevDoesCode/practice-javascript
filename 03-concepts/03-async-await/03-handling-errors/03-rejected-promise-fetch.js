async function f() {
    try {
        const response = await fetch('https://some-bad.come/wrong-url');
    } catch(e) {
        console.log('Some error: ' + e);
    }
}
