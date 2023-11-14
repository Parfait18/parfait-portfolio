'use client'
import ReactCompareImage from 'react-compare-image';

export default function CompareImage() {
    return (
        <div className='w-full'>
            <ReactCompareImage hover={true} leftImage="/images/programming1.jpg" rightImage="/images/profile.jpg" />
        </div>
    )
}
