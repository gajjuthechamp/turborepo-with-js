export const Button = ({size, type, bleed, text, title, clickHandler}) => {
    const ButtonType = {
        primary: 'cursor-pointer bg-primary hover:bg-white text-white hover:text-carbonBlack transition-all duration-500 shadow-inner text-Osm focus:outline-none rounded mx-auto font-F1Body py-3 px-5  uppercase',
        secondary: 'cursor-pointer bg-carbonBlack hover:bg-lightBlack text-white transition-all duration-500 uppercase py-3 px-5 rounded whitespace-nowrap relative text-Osm',
        basicLight: 'bg-white text-Osm text-carbonBlack font-F1Body border border-gray20 rounded cursor-default font-semibold',
        delete: 'bg-red-300 hover:bg-red-500 text-white font-bold rounded',
        basicDark: 'bg-carbonBlack text-Osm text-white font-F1Body border border-gray20 rounded cursor-default font-semibold',
    };

    const ButtonBleed = {
        full: 'w-full',
        auto: 'w-auto mx-1.5',
        mobileFull: 'w-full sm:w-auto'
    };
    const ButtonSize = {
        sm: 'py-2 px-4',
        lg: 'py-3 px-6'
    };

    const ButtonText = {
        uppercase: 'uppercase',
        capitalize: 'capitalize'
    };
    
    const classNames = [ButtonType[type], ButtonSize[size], ButtonBleed[bleed], ButtonText[text]].join(' ');
    return (
        <button onClick={clickHandler} className={classNames}>{title}</button>
    );
};
