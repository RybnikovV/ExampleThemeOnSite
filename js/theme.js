let themeDark = {
    '--main-bg-color': '#252525',
    '--invers-bg-color': '#D7D7D7',
    '--accent-bg-color': '#FFCC00',

    '--main-text-color': '#ffffff',
    '--invers--text-color': '#252525',
};

let themeBase = {
    '--main-bg-color': '#ffffff',
    '--invers-bg-color': '#252525',
    '--accent-bg-color': '#FFCC00',

    '--main-text-color': '#252525',
    '--invers--text-color': '#ffffff',
};

function settingTheme(theme){
    const root = document.querySelector(':root');

    theme = eval(theme);

    for(let key in theme){
        root.style.setProperty(key, theme[key]);
    }
}


let themeButtonEvent = document.querySelectorAll('label[data-theme]');

for(let i = 0; i < themeButtonEvent.length; i++){
    themeButtonEvent[i].addEventListener("click", () => settingTheme( themeButtonEvent[i].getAttribute('data-theme') ));
}