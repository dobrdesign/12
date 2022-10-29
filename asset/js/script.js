document.body.onclick = (event) => {
    const elem = event.target;
    // console.log(elem);
    if (elem.classList.contains('btn-copy')) {
        console.log(elem);
        navigator.clipboard.writeText('192.168.1.1:22655')
            .then(() => {
                document.querySelector('.out').innerHTML += 'copy<br>';
            })
    }
}
