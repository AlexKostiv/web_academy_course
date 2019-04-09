function greetWidget(rootElement) {
    const button = rootElement.querySelector('.greet-widget__btn');
    const title = rootElement.querySelector('.greet-widget__title');

    let isActive = true;

    button.onclick = toggle;

    function toggle() {
        if (isActive) {
            toggleOff();
        } else {
            toggleOn();
        }
    }

    function toggleOn() {
        button.classList.add('btn_active');
        rootElement.classList.add('greet-widget_active');
        title.classList.add('greet-widget__title_active');
        isActive = true;
    }


    function toggleOff() {
        button.classList.remove('btn_active');
        rootElement.classList.remove('greet-widget_active');
        title.classList.remove('greet-widget__title_active');
        isActive = false;
    }

    toggle();
}


export { greetWidget };