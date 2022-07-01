const typed = select('.typed')
if (typed) {
    let typed typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new typed('.typed', {
        strings:typed_strings,
        loop: true,
        typedSpeed: 100,
        backSpeed:50,
        backDelay:2000
    })
}