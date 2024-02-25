import { Button } from '@nextui-org/react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='w-screen h-screen flex flex-col'>
            <div className='m-auto flex flex-col items-center gap-3'>
                <img src='/no-results.svg' className='w-[280px] h-[280px]' />
                <p className='text-center text-xl'>
                    {'<'} 404 Not Found {'>'}
                </p>
                <Button color='primary' className='mt-2' as={Link} to={'/'}>
                    Go Home
                </Button>
            </div>
        </div>
    )
}

export default NotFound
