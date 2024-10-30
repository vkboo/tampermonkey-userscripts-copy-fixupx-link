import type { FC } from 'react';

type Props = {
    text: string;
    onClick: () => void;
}

const MenuItem: FC<Props> = (props) => {
    return (
        <div role="menuitem" className="css-175oi2r r-1loqt21 r-18u37iz r-1mmae3n r-3pj75a r-13qz1uu r-o7ynqc r-6416eg r-1ny4l3l" onClick={props.onClick}>
            <div className="css-175oi2r r-1777fci r-faml9v">
                <svg viewBox="0 0 24 24" aria-hidden="true"
                    className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-1q142lx">
                    <g>
                        <path
                            d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z">
                        </path>
                    </g>
                </svg>

            </div>
            <div className="css-175oi2r r-16y2uox r-1wbh5a2">
                <div dir="ltr" className="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-b88u0q"
                    style={{
                        textOverflow: 'unset',
                        color: 'rgb(231, 233, 234)'
                    }}>
                    <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" style={{ textOverflow: 'unset' }}>
                        {props.text}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;