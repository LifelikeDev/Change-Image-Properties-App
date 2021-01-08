const inputs = document.querySelectorAll('.controls input');

function regulator() {
    // console.log(this.dataset.sizing || '');

    // grab the value of data-sizing in html to be added to the new value
    const suffix = this.dataset.sizing || '';

    // set new value as CSS variable
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);


}

inputs.forEach(input => {
    input.addEventListener('change', regulator);
    // input.addEventListener('mousemove', regulator);

    input.style.cursor = `pointer`;
});