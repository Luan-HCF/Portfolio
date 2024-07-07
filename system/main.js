    let names = [];
    let currentIndex = 0;
    let approvedNames = [];

    function loadNames() {
        const namesText = document.getElementById("namesInput").value;
        names = namesText.split('\n').map(name => name.trim()).filter(name => name);
        currentIndex = 0;
        if (names.length > 0) {
            updateInput();
        }
    }

    function updateInput() {
        if (names.length === 0) return;
        const name = names[currentIndex];
        const extractedName = name.match(/\((.*?)\)/)[1];
        document.getElementById("inputField").value = extractedName;
    }

    function copyText() {
        const input = document.getElementById("inputField");
        input.select();
        document.execCommand("copy");
    }

    function copyAllText() {
        const output = document.getElementById("outputField");
        const range = document.createRange();
        range.selectNodeContents(output);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("copy");
    }

    function nextName() {
        if (names.length === 0) return;
        currentIndex = (currentIndex + 1) % names.length;
        updateInput();
    }

    function prevName() {
        if (names.length === 0) return;
        currentIndex = (currentIndex - 1 + names.length) % names.length;
        updateInput();
    }

    function updateOutputField() {
        const output = document.getElementById("outputField");
        const report = `Aprovados:\n${approvedNames.join('\n')}`;

        output.innerText = report;
    }

    function approveName() {
        const input = document.getElementById("inputField");
        const name = names[currentIndex];
        approvedNames.push(name);
        names.splice(currentIndex, 1);
        if (currentIndex >= names.length) {
            currentIndex = 0;
        }
        if (names.length > 0) {
            updateInput();
        } else {
            document.getElementById("inputField").value = '';
        }
        updateOutputField();
    }

    function rejectName() {
        names.splice(currentIndex, 1);
        if (currentIndex >= names.length) {
            currentIndex = 0;
        }
        if (names.length > 0) {
            updateInput();
        } else {
            document.getElementById("inputField").value = '';
        }
    }

    document.addEventListener("DOMContentLoaded", updateInput);