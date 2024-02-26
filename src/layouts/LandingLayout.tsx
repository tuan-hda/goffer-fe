import { Tab, Tabs } from '@nextui-org/react'
import { Link, Outlet } from 'react-router-dom'

const LandingLayout = () => {
    return (
        <div className='h-screen w-full'>
            <Outlet />
            <div className='absolute bottom-12 flex flex-col items-center justify-center w-full'>
                <div className='flex items-center'>
                    <Tabs classNames={{ tabList: 'bg-beige shadow-xl relative z-10' }} size='lg' color='primary'>
                        <Tab key='home' title='Home' href='/' />
                        <Tab key='who-are-we' title='Who are we' href='/who-we-are' />
                        <Tab key='features' title='Features' href='/features' />
                        <Tab key='trusted-by' title='Trusted by' href='/trusted-by' />
                        <Tab key='pricing' title='Pricing' href='/pricing' />
                    </Tabs>
                    <div className='rounded-r-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition h-11 flex items-center -ml-5 relative w-[120px] text-gray-600 pl-10 shadow-xl font-semibold'>
                        Sign Up
                    </div>
                </div>
                <div className='flex items-center justify-center gap-4 mt-3'>
                    <Link to='/about-us' className='hover:underline hover:text-text transition text-sm text-black/40'>
                        About us
                    </Link>
                    <Link to='/about-us' className='hover:underline hover:text-text transition text-sm text-black/40'>
                        Support
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingLayout
