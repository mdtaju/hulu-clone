import Thumbnail from "./Thumbnail";
import FlipMove from 'react-flip-move';

function Results({ requests }) {
    
    return (
        <>
            <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
                {
                    requests.map(item => (
                        <Thumbnail key={item.id} result={item}/>
                ))}
            </FlipMove>
        </>
    )
}

export default Results

