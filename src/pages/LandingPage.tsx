import { TbHeartHandshake, TbPlayerRecord, TbSparkles, TbWaveSine } from 'react-icons/tb'

const LandingPage = () => {
    return (
        <div className='flex w-full h-full'>
            <div className='m-auto flex flex-col items-center'>
                <img src='/logo.svg' alt='logo' className='w-10 h-10' />
                <p className='mt-5'>Hi there. We're Goffer.</p>
                <p className='font-serif font-semibold text-5xl mt-2'>Offer to your quality candidates.</p>
                <p className='font-serif font-semibold text-5xl mt-2'>Got offer from your recruiter.</p>
                <div className='flex items-center gap-5 mt-6'>
                    <div className='flex items-center gap-1 text-lg'>
                        <TbWaveSine className='text-2xl' /> Audio Responses
                    </div>
                    <div className='flex items-center gap-1 text-lg'>
                        <TbPlayerRecord className='text-2xl' /> Video Responses
                    </div>
                    <div className='flex items-center gap-1 text-lg'>
                        <TbSparkles className='text-2xl' /> Artificial Intelligence
                    </div>
                    <div className='flex items-center gap-1 text-lg'>
                        <TbHeartHandshake className='text-2xl' /> Network
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
