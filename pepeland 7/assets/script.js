document.body.onclick = (event) => {
    const elem = event.target;
    // console.log(elem);
    if (elem.classList.contains('header_btn_ip')) {
        console.log(elem);
        navigator.clipboard.writeText('192.168.1.1:22655')
            .then(() => {
                document.querySelector('.out').innerHTML += 'copy<br>';
            })
    }
}
