import { observer } from 'mobx-react-lite'
import { Model } from './Model'

interface Props {
    model: Model
}

const Header = observer(({ model }: Props) => {
    return (
        <div className='mx-auto min-w-[360px] bg-gradient-radial from-darkblue1 to-darkblue2 bg-fixed py-2 text-center sm:max-w-screen-lg'>
            <div className='font-body text-brown dark:text-dark-50 mx-auto w-full'>
                {!model.isBannerClosed && (
                    <div className='fixed left-0 right-0 top-0 z-50 mx-auto max-w-screen-lg'>
                        <div className='w-fiull border-1 border-c6 bg-c4 relative mx-4 my-4 flex flex-col-reverse items-start justify-items-end gap-0 rounded-2xl px-4 py-2 md:flex-row md:items-center md:justify-between md:gap-4'>
                            <div className='flex w-full flex-col items-center justify-between gap-2 md:flex-row'>
                                <div className='text-c7'>
                                    <div className='flex flex-col items-center gap-1 md:hidden'>
                                        <div>
                                            💰 <b>Airdrop! 6.2% APY</b>
                                        </div>
                                        <div>Earn TON + HPO by Staking in Hipo.</div>
                                    </div>
                                    <div className='max-md:hidden'>
                                        💰 <b>Airdrop! 6.2% APY</b> — Earn TON + HPO by Staking in Hipo.
                                    </div>
                                </div>
                                <div>
                                    <a href='http://t.me/HipoFinanceBot/join' target='_blank' rel='noopener noreferrer'>
                                        <button className='bg-c6 rounded-xl px-8 py-2 text-white'>Earn Now</button>
                                    </a>
                                </div>
                            </div>
                            <div className='absolute right-0 top-0 flex w-full flex-row justify-end md:static md:w-fit'>
                                <button
                                    className='text-c6 p-3 text-xs font-bold md:py-2'
                                    onClick={() => {
                                        model.closeBanner()
                                    }}
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                <div className={'mx-auto px-4 md:max-w-screen-xl' + (!model.isBannerClosed ? ' mt-28 md:mt-16' : '')}>
                    <div className='min-w-[360px] bg-gradient-radial from-darkblue1 to-darkblue2 bg-fixed text-center'>
                        <div className='mx-auto flex min-w-[360px] flex-row items-center sm:max-w-screen-lg'>
                            <div className='mb-4 flex w-full flex-row items-center gap-4 p-8'>
                                <a href='https://hipo.finance/'>
                                    <img src='hipo.svg' className='h-16 w-16' alt='Hipo Logo' />
                                </a>
                                <a href='https://hipo.finance/'>
                                    <div className='font-eczar text-2xl text-white'>Hipo</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Header
