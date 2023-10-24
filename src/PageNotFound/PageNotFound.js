import './PageNotFound.css';

function PageNotFound() {
    return (
        <div className='notFound'>
            {/* <!-- svg: first layer --> */}
            <svg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'>
                <filter id='noiseFilter'>
                    <feTurbulence
                        type='fractalNoise'
                        baseFrequency='0.76'
                        numOctaves='5'
                        stitchTiles='stitch' />
                </filter>

                <rect width='100%' height='100%' filter='url(#noiseFilter)' />
            </svg>
            <h1>The page doesn't exist</h1>
        </div>
    );
}

export default PageNotFound;