export const TextContent = ({ tag, type, size, color, className, children }) => {

    let classList='';

    switch (type) {
        case 'primary': classList = 'cursor-pointer bg-primary hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-500 text-carbonBlack transition ease-in duration-200 text-Osm shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded mx-auto font-F1Body py-3 px-5  uppercase'; break;
        case 'secondary': classList = 'cursor-pointer bg-carbonBlack hover:bg-carbonBlack text-carbonBlack uppercase py-3 px-5 rounded whitespace-nowrap relative text-Osm'; break;
        case 'secondary-sml': classList = 'cursor-pointer bg-carbonBlack hover:bg-carbonBlack text-carbonBlack uppercase py-3 px-5 rounded whitespace-nowrap relative text-xs'; break;
        default: classList = '';
    }

    switch(size) {
        case 'block': classList += ' block'; break;
        default: classList += 'inline-block';
    }

    switch (color) {
        case 'black': classList += ' carbon-black'; break;
        default: classList += ' text-primary';
    }

    if(!className) className='';

    const htmlTag =  tag && tag.toLowerCase();

    switch (htmlTag) {
        case 'p': return (<p className={`${classList} ${className}`}>{children}</p>);
        default: return (<div className={`${classList} ${className}`}> {children} </div>);
    }

};
