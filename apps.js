function compareText() {
    const text1 = document.getElementById('text1').value;
    const text2 = document.getElementById('text2').value;

    const filteredText1 = text1.replace(/[\{\[].*?[\}\]]/g, '');
    const filteredText2 = text2.replace(/[\{\[].*?[\}\]]/g, '');

    const d = diffWords(filteredText1, filteredText2);
    const diffOutput = document.getElementById('diffOutput');
    diffOutput.innerHTML = '';

    d.forEach(item => {
        const span = document.createElement('span');
        span.textContent = item.value;

        if (item)

        if (item.added) {
            span.classList.add('added');
        } else if (item.removed) {
            span.classList.add('removed');
        }

        diffOutput.appendChild(span);
    })
}


const compareButton = document.getElementById('compareButton');
compareButton.addEventListener('click', compareText);