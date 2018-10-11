import xs from 'xstream';
export const Qualifier = ({ DOM, Time }, page) => {
    return {
        DOM: xs
            .of('B')
            .compose(Time.delay(1000))
            .startWith('A')
            .map(_ => {
                return <div className="wrapper">{_}</div>;
            })
    };
};
