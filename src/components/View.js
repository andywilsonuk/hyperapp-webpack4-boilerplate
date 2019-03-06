import { h } from 'hyperapp';
import Counter from './Counter';

export default (state, actions) =>
    <div>
        <Counter num={state.num} add={actions.add} sub={actions.sub} />
    </div>;
