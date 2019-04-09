import { greetWidget } from './scrypts/dom';
import './lesson_11.scss';

const widgets = document.querySelectorAll('.greet-widget');

for (const widgetElement of widgets) {
    console.log(widgetElement);
    greetWidget(widgetElement);
}



