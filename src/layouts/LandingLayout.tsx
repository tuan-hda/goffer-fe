import { Tab, Tabs } from '@nextui-org/react'
import { Link, Outlet } from 'react-router-dom'

const LandingLayout = () => {
    return (
        <div className='h-screen w-full'>
            <Outlet />
            <div className='absolute bottom-12 flex flex-col items-center justify-center w-full'>
                <Tabs classNames={{ tabList: 'bg-beige shadow-xl' }} size='lg' color='primary'>
                    <Tab key='home' title='Home' href='/' />
                    <Tab key='who-we-are' title='Who we are' href='/who-we-are' />
                    <Tab key='features' title='Features' href='/features' />
                    <Tab key='trusted-by' title='Trusted by' href='/trusted-by' />
                    <Tab key='pricing' title='Pricing' href='/pricing' />
                </Tabs>
                <div className='flex items-center justify-center gap-4 mt-3'>
                    <Link
                        to='/about-us'
                        className='hover:underline hover:text-text transition text-[13px] text-black/40'
                    >
                        About us
                    </Link>
                    <Link
                        to='/about-us'
                        className='hover:underline hover:text-text transition text-[13px] text-black/40'
                    >
                        Support
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingLayout
