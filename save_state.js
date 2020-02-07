function download(content, fileName, contentType) {
    let a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([content], {type: contentType}));
    a.download = fileName;
    a.click();
};
function saveAsJSON(){
    let state = JSON.stringify(window.Calc.getState());
    let title = document.querySelector('.dcg-variable-title').innerText;
    download(state, title+'.json', 'text/plain');
}
saveAsJSON()