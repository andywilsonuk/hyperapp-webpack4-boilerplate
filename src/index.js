import { app } from 'hyperapp';
import actions from './actions';
import state from './state';
import view from './components/view';
import './styles/app.css';

let main = app(
    state,
    actions,
    view,
    document.body,
);

main.startup();

if (module.hot) {
    module.hot.accept([
        './components/view.js',
        './actions',
        './styles/app.css',
    ], () => {
        main = app(
            main.getState(),
            actions,
            view,
            document.body,
        );
    });
}
