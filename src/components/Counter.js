import { h } from 'hyperapp';
import Description from './description';

export default ({ num, add, sub }) => (
    <div class="counter">
        <Description />
        <section>
            <button class="sub" onclick={sub} disabled={num < 1}>-</button>
            <p class="count">{num}</p>
            <button class="add" onclick={add}>+</button>
        </section>
    </div>
);
