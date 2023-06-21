
export const Heading = ({ tag, className, content, children }) => {
    if(!tag) return null;

    if(!className) className='';
    if(!content) content = children;

    const htmlTag =  tag && tag.toLowerCase();

    switch (htmlTag) {
    case 'h1': return (<h1 className={`font-F1Black uppercase text-2xl sm:text-O4xl mb-2 sm:mb-6 flex items-center justify-center ${className}`}>{content}</h1>);
    case 'h2': return (<h2 className={`text-lg font-F1Bold leading-6 mb-6 ${className}`}> {content} </h2>);
    case 'h3': return (<h3 className={`text-lg md:text-2xl text-carbonBlack font-F1Bold ${className}`}> {content} </h3>);
    case 'h4': return (<h4 className={`font-F1Bold text-lg ${className}`}> {content} </h4>);
    case 'h5': return (<h5 className={`mb-3 text-carbonBlack font-F1Bold text-Osm ${className}`}> {content} </h5>);
    case 'h6': return (<h6 className={`${className}`}> {content} </h6>);
    default: break;
    }

};