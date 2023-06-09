import React, { useEffect, useRef } from 'react'
import Step2Video from '../Video/Step2.mp4'
export default function Step8CHome() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.onloadedmetadata = () => {
                videoRef.current.play();
            };
        }
    }, [videoRef]);

    return (
        <div className='mt-[88px] w-[98vw]'>
            <div className='w-[80%] ml-auto mr-auto'>
                <div className='px-[80px] flex  items-center w-[100%] 
                    tablet:flex-col-reverse
                    mobile:flex-col-reverse
                '>
                    <div className='w-[50%]
                        tablet:w-[100%]
                        mobile:w-[100%]
                    '>
                        <h5 className='text-[18px] font-semibold mb-[16px]'>Step 2</h5>
                        <h1 className='text-[48px] leading-[54px] font-semibold mb-[24px] w-[70%]'>Make your place stand out</h1>
                        <p className='font-normal text-[18px] w-[90%]'>In this step, you’ll add some of the amenities your place offers, plus 5 or more photos. Then, you’ll create a title and description.
                        </p>
                    </div>
                    <div className='w-[50%] tablet:w-[100%]
                        mobile:w-[100%]'>
                        <video ref={videoRef} crossOrigin='anonymous' width="100%" height="421" autoPlay="" className='object-cover' preload='auto' webkit-playsinline="true"
                            playsinline="true" muted="muted">
                            <source src={Step2Video} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div >
    )
}
