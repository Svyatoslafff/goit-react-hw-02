import css from './Options.module.scss';
export default function Options({ handleClick }) {
    return (
        <div>
            <ul className={css.buttonsList}>
                <li>
                    <button
                        onClick={() => {
                            handleClick('good');
                        }}
                    >
                        Good
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            handleClick('neutral');
                        }}
                    >
                        Neutral
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            handleClick('bad');
                        }}
                    >
                        Bad
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            handleClick('', true);
                        }}
                    >
                        Reset
                    </button>
                </li>
            </ul>
        </div>
    );
}
