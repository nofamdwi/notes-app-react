import { SlSocialGithub, SlSocialInstagram, SlSocialLinkedin } from 'react-icons/sl';

export default function Footer() {
    return (
        <footer className='mx-auto container border-t-2 py-6 px-2'>
            <div className='flex justify-between items-center'>
                <p className='lg:text-md text-sm font-medium leading-tight dark:text-slate-50'>@ Made by Nofam Dwiyanto <br /> Submission for ID Camp X DICODING</p>
                <div className='flex gap-5'>
                    <a
                        href="https://instagram.com/nofamdwi?igshid=MzNlNGNkZWQ4Mg=="
                        target='blank'
                    >
                        <SlSocialInstagram className='lg:text-4xl text-2xl dark:fill-slate-50 dark:hover:fill-blue-500' />
                    </a>
                    <a
                        href="https://github.com/nofamdwi"
                        target='blank'
                    >
                        <SlSocialGithub className='lg:text-4xl text-2xl dark:fill-slate-50 dark:hover:fill-blue-500' />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/nofam-dwiyanto-253989252/"
                        target='blank'
                    >
                        <SlSocialLinkedin className='lg:text-4xl text-2xl dark:fill-slate-50 dark:hover:fill-blue-500' />
                    </a>
                </div>
            </div>
        </footer>
    )
}