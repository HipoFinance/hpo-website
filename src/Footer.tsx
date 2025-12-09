import { observer } from 'mobx-react-lite'
import { Model } from './Model'

interface Props {
    model: Model
}

const Footer = observer(({}: Props) => {
    return (
        // <!-- Footer -->
        <div className='mx-auto min-w-[360px] bg-gradient-radial from-darkblue1 to-darkblue2 bg-fixed py-4 text-center md:py-8 lg:py-16'>
            <div className='mb-16 w-full'>
                <div className='h-px w-full border-2 border-t border-purple6 border-opacity-50'></div>
            </div>

            <div className='mx-auto flex w-full max-w-screen-lg flex-col justify-center px-8 py-8 text-start sm:flex sm:flex-row-reverse sm:items-start sm:px-0'>
                <div className='mx-auto flex flex-row flex-wrap'>
                    <div className='mx-8 my-4'>
                        <h3 className='font-bold text-purple9'>Social</h3>
                        <a className='my-4 block text-sm' href='https://t.me/HipoFinance' target='hipo_telegram'>
                            Telegram
                        </a>
                        <a className='my-4 block text-sm' href='https://twitter.com/hipofinance' target='hipo_twitter'>
                            Twitter
                        </a>
                        <a
                            className='my-4 block text-sm'
                            href='https://www.youtube.com/@HipoFinance'
                            target='hipo_youtube'
                        >
                            YouTube
                        </a>
                        <a className='my-4 block text-sm' href='https://medium.com/@hipofinance' target='hipo_blog'>
                            Blog
                        </a>
                    </div>

                    <div className='mx-8 my-4'>
                        <h3 className='font-bold text-purple9'>Community</h3>
                        <a className='my-4 block text-sm' href='https://t.me/hipo_chat' target='hipo_chat'>
                            Hipo Chat
                        </a>
                        <a className='my-4 block text-sm' href='https://t.me/Hipo_hub' target='hipo_hub'>
                            {' '}
                            Hipo Hub{' '}
                        </a>
                    </div>

                    <div className='mx-8 my-4'>
                        <h3 className='font-bold text-purple9'>Docs</h3>
                        <a className='my-4 block text-sm' href='https://github.com/HipoFinance' target='hipo_github'>
                            GitHub
                        </a>
                        <a className='my-4 block text-sm' href='https://docs.hipo.finance/' target='hipo_docs'>
                            Documentation
                        </a>
                        <a className='my-4 block text-sm' href='https://hpo.hipo.finance/' target='hipo_hpo'>
                            {' '}
                            HPO{' '}
                        </a>
                    </div>
                </div>

                <div className='mx-auto flex max-w-96 flex-col gap-4 px-8 pb-16 sm:w-1/2'>
                    <div className='flex select-none flex-row items-center gap-8 font-eczar text-2xl'>
                        <img src='hipo.svg' className='-mr-3 mb-2 h-16' />
                        <p>Hipo</p>
                    </div>
                    <p>
                        Hipo is an open-source liquid staking protocol with one of the most engaged communities on TON.
                    </p>
                </div>
            </div>
        </div>
    )
})

export default Footer
