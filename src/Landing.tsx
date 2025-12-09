import { observer } from 'mobx-react-lite'
import { Model } from './Model'

interface Props {
    model: Model
}

const Landing = observer(({ model }: Props) => {
    return (
        <div className='mx-auto min-w-[360px] bg-gradient-radial from-darkblue1 to-darkblue2 bg-fixed py-4 text-center'>
            <div className='mx-auto flex min-w-[360px] flex-row items-center text-center sm:max-w-screen-lg'>
                <div className='mb-16 w-full px-4 text-4xl font-bold sm:text-5xl'>
                    <span className='bg-gradient-to-r from-purple1 to-pink1 bg-clip-text text-transparent'>$HPO</span>,
                    the Governance & Profit-Sharing Token of Hipo
                </div>
            </div>

            <div className='mx-auto mb-24 flex w-full flex-col items-center justify-between gap-4 px-4 sm:max-w-screen-lg md:flex-row'>
                <div className='lex flex-col justify-center gap-4 p-4 md:w-4/12'>
                    <div className='mb-12 text-left text-3xl font-medium leading-relaxed'>
                        Be Part of the
                        <div className='inline-block whitespace-nowrap bg-brush bg-contain bg-bottom bg-no-repeat'>
                            Future of TON Staking!
                        </div>
                    </div>

                    <div className='min-w-[280px] md:px-8'>
                        <a
                            className='flex w-full flex-row place-content-center items-center gap-4 rounded-2xl bg-gradient-radial from-purple1 to-purple2 px-12 py-4'
                            href='https://app.ston.fi/swap?chartVisible=false&ft=TON&tt=HPO'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <div className='text-2xl font-bold'>Buy HPO</div>
                        </a>
                    </div>
                </div>
                <div className='flex w-3/4 flex-row md:w-3/12 md:flex-col'>
                    <div className='mb-10 flex w-full flex-row justify-start'>
                        <img src='hpo.svg' className='ml-4 size-20 -rotate-30' alt='HPO Token' />
                    </div>
                    <div className='mt-10 flex w-full flex-row justify-end'>
                        <img src='hpo.svg' className='mr-4 size-20 rotate-30' alt='HPO Token' />
                    </div>
                </div>

                <div className='mx-auto w-full md:w-5/12'>
                    <div className='flex flex-auto flex-col items-center'>
                        <div className='mb-4 w-full'>
                            <gecko-coin-price-chart-widget
                                locale='en'
                                transparent-background='false'
                                outlined='true'
                                coin-id='hipo-governance-token'
                                initial-currency='usd'
                            ></gecko-coin-price-chart-widget>
                        </div>

                        <div className='flex w-full flex-row justify-between text-sm'>
                            <div className='flax-auto space-x-1'>
                                <span className='text-lg font-normal'>Market Cap.: </span>
                                <span id='hpoMarketCap' className='text-2xl font-bold'>
                                    {model.getMarketCap}
                                </span>
                            </div>
                            <div className='flax-auto space-x-1'>
                                <span className='text-lg font-normal'>Volume: </span>
                                <span id='hpoVolume' className='text-2xl font-bold'>
                                    {model.getTotalVolume}
                                </span>
                            </div>
                            <div className='flax-auto space-x-1'>
                                <span className='text-lg font-normal'>Holders: </span>
                                <span id='hpoHolders' className='text-2xl font-bold'>
                                    {model.getHoldersCount}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-auto flex min-w-[360px] flex-col items-center sm:max-w-screen-lg'>
                <div className='mb-12 flex w-full flex-col items-center p-5'>
                    <iframe
                        className='aspect-video h-full w-full rounded-md'
                        src='https://www.youtube.com/embed/QYU-TWJK1yg'
                        title='YouTube video player'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                    ></iframe>
                </div>

                <div className='mb-8 w-full px-4 text-2xl'>
                    <div className='mb-12 font-bold'>Build Success With Our Community Through $HPO</div>
                    <div className='mx-auto mb-4 max-w-md'>
                        We see <span className='font-bold text-pink1'>incredible growth potential</span> and are excited
                        to capture that value alongside all Hipo community.
                    </div>
                    <div className='mx-auto my-8 text-purple3'>Shape TON`&apos;`s future with $HPO!</div>
                    <img
                        src='rocket.webp'
                        className='mx-auto h-80 object-cover mix-blend-screen'
                        alt='Rocket Illustration'
                    />
                </div>

                <div className='relative z-10 mb-24 overflow-x-clip px-16'>
                    <img
                        src='diamond.svg'
                        className='absolute right-2 top-8 -z-10 h-24 -rotate-12 object-contain opacity-20'
                        alt='Diamond Decoration'
                    />
                    <div className='mb-12 text-3xl font-bold'>How to Buy HPO</div>
                    <div className='mb-12 flex w-full flex-col gap-8 text-left sm:grid sm:grid-flow-row sm:grid-cols-2'>
                        <div className='flex flex-1 flex-col gap-4'>
                            <div className='flex h-14 w-14 place-content-center items-center rounded-2xl bg-gradient-radial from-purple1 to-purple2 text-3xl'>
                                01
                            </div>
                            <div className=''>Get a wallet supporting TON.</div>
                        </div>

                        <div className='flex flex-1 flex-col gap-4'>
                            <div className='flex h-14 w-14 place-content-center items-center rounded-2xl bg-gradient-radial from-purple1 to-purple2 text-3xl'>
                                02
                            </div>
                            <div className=''>Ensure you have enough TON for your desired $HPO purchase.</div>
                        </div>

                        <div className='flex flex-1 flex-col gap-4'>
                            <div className='flex h-14 w-14 place-content-center items-center rounded-2xl bg-gradient-radial from-purple1 to-purple2 text-3xl'>
                                03
                            </div>
                            <div className=''>Head to the STON.fi DEX and connect your TON wallet.</div>
                        </div>

                        <div className='flex flex-1 flex-col gap-4'>
                            <div className='flex h-14 w-14 place-content-center items-center rounded-2xl bg-gradient-radial from-purple1 to-purple2 text-3xl'>
                                04
                            </div>
                            <div className=''>Swap your TON for $HPO, and receive $HPO in your wallet instantly.</div>
                        </div>
                    </div>

                    <div className='mb-12 flex w-full flex-col items-center'>
                        <iframe
                            className='aspect-video h-full w-full rounded-md'
                            src='https://youtube.com/embed/ZHAlS4wystU?feature=share'
                            title='YouTube video player'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                <div className='mb-8'>
                    <div className='text-4xl font-bold'>Tokenomics</div>
                    <img src='tokenomics.svg' className='my-8 w-full' alt='HPO Tokenomics Chart' />
                </div>

                <div className='mb-32 px-8 text-2xl sm:mx-24'>
                    Each category in $HPO tokenomics is strategically designed to fuel Hipo`&apos;`s growth.
                    <a
                        href='https://docs.hipo.finance/hipo-tokens/hipo-governance-token-hpo'
                        className='text-purple3'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Learn more!
                    </a>
                </div>

                <div className='mx-8 mb-32 flex flex-col gap-16'>
                    <div className='text-4xl'>Unique Opportunity for Early Investors</div>

                    <div className='flex max-w-[800px] flex-col items-start gap-8 md:grid md:grid-flow-row md:grid-cols-2'>
                        <div className='flex flex-row items-center gap-4'>
                            <div className='flex h-14 w-14 place-content-center items-center rounded-2xl bg-gradient-radial from-purple1 to-purple2 text-3xl'>
                                01
                            </div>
                            <div className='inline-block bg-brush bg-contain bg-bottom bg-no-repeat pb-2 text-left text-2xl font-bold'>
                                Proven, Not Just a Plan
                            </div>
                        </div>
                        <div className='text-left text-lg'>
                            Hipo has been live on TON mainnet since October 30, 2023, with $HPO as its governance
                            token—a solid foundation built over a year.
                        </div>
                    </div>

                    <div className='flex max-w-[800px] flex-col items-start gap-8 md:grid md:grid-flow-row md:grid-cols-2'>
                        <div className='flex flex-row items-center gap-4'>
                            <div className='flex h-14 w-14 place-content-center items-center rounded-2xl bg-gradient-radial from-purple1 to-purple2 text-3xl'>
                                02
                            </div>
                            <div className='inline-block bg-brush bg-contain bg-bottom bg-no-repeat pb-2 text-left text-2xl font-bold'>
                                Impressive Metrics
                            </div>
                        </div>
                        <div className='mx-auto text-left text-lg md:mx-0'>
                            <ul className='list-inside list-disc text-purple3'>
                                <li className='py-4'>
                                    <span className='text-white'>1.54M TON ($8.5M) TVL</span>
                                </li>
                                <li className='border-t border-purple3 border-opacity-25 py-4'>
                                    <div className='inline-block align-top'>
                                        <span className='text-white'>17K Active Stakers</span>
                                        <br />
                                        <a href='https://stats.hipo.finance/' className='text-purple3 underline'>
                                            Live Hipo Stats
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex max-w-[800px] flex-col items-start gap-8 md:grid md:grid-flow-row md:grid-cols-2'>
                        <div className='flex flex-row items-center gap-4'>
                            <div className='flex h-14 w-14 place-content-center items-center rounded-2xl bg-gradient-radial from-purple1 to-purple2 text-3xl'>
                                03
                            </div>
                            <div className='inline-block bg-brush bg-contain bg-bottom bg-no-repeat pb-2 text-left text-2xl font-bold'>
                                Thriving Community
                            </div>
                        </div>
                        <div className='mx-auto text-left text-lg md:mx-0'>
                            <ul className='list-inside list-disc text-purple3'>
                                <li className='py-4'>
                                    <span className='font-bold text-white'>3.1M</span>
                                    <span className='text-white'>Hipo Gang Members</span>
                                </li>
                                <li className='border-t border-purple3 border-opacity-25 py-4'>
                                    <span className='font-bold text-white'>1.1M</span>
                                    <span className='text-white'>Telegram Subscribers</span>
                                </li>
                                <li className='border-t border-purple3 border-opacity-25 py-4'>
                                    <span className='font-bold text-white'>147K</span>
                                    <span className='text-white'>YouTube Subscribers</span>
                                </li>
                                <li className='border-t border-purple3 border-opacity-25 py-4'>
                                    <span className='font-bold text-white'>146K</span>
                                    <span className='text-white'>Twitter Followers</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex max-w-[800px] flex-col items-start gap-8 md:grid md:grid-flow-row md:grid-cols-2'>
                        <div className='flex flex-row items-center gap-4'>
                            <div className='flex h-14 w-14 place-content-center items-center rounded-2xl bg-gradient-radial from-purple1 to-purple2 text-3xl'>
                                04
                            </div>
                            <div className='inline-block bg-brush bg-contain bg-bottom bg-no-repeat pb-2 text-left text-2xl font-bold'>
                                Products Built
                            </div>
                        </div>
                        <div className='mx-auto text-left text-lg md:mx-0'>
                            <ul className='list-inside list-disc text-purple3'>
                                <li className='py-4'>
                                    <span className='text-white'>Hipo v1, Hipo v2</span>
                                </li>
                                <li className='border-t border-purple3 border-opacity-25 py-4'>
                                    <span className='text-white'>Hipo Telegram Mini App</span>
                                </li>
                                <li className='border-t border-purple3 border-opacity-25 py-4'>
                                    <span className='text-white'>Hipo Stats</span>
                                </li>
                                <li className='border-t border-purple3 border-opacity-25 py-4'>
                                    <span className='text-white'>Hipo Gang</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='relative z-10 flex max-w-[800px] flex-col items-start gap-8 md:grid md:grid-flow-row md:grid-cols-2'>
                        <img
                            src='diamond.svg'
                            className='absolute top-1/4 -z-10 hidden h-1/2 w-1/3 -scale-x-100 object-contain opacity-20 md:block'
                            alt='Diamond Decoration'
                        />
                        <div className='flex flex-row items-center gap-4'>
                            <div className='flex h-14 w-14 place-content-center items-center rounded-2xl bg-gradient-radial from-purple1 to-purple2 text-3xl'>
                                05
                            </div>
                            <div className='inline-block bg-brush bg-contain bg-bottom bg-no-repeat pb-2 text-left text-2xl font-bold'>
                                Incredible Growth Potential
                            </div>
                        </div>
                        <div className='text-left text-lg'>
                            <div className='text-purple3'>Market Opportunity</div>
                            <ul className='list-inside list-disc text-purple3'>
                                <li className='py-4'>
                                    <span className='text-white'>
                                        Only 12% of 500M stakable TON is in liquid staking—massive room for growth.
                                    </span>
                                </li>
                            </ul>

                            <div className='text-purple3'>Highest APY</div>
                            <ul className='list-inside list-disc text-purple3'>
                                <li className='py-4'>
                                    <span className='text-white'>
                                        Hipo delivered top returns, and as TON decentralizes, it&apos;s poised to
                                        capture a larger share of the liquid staking market.
                                    </span>
                                </li>
                            </ul>

                            <div className='text-purple3'>No Private Fundraising</div>
                            <ul className='list-inside list-disc text-purple3'>
                                <li className='py-4'>
                                    <span className='text-white'>
                                        Early investors buy $HPO at a modest price with room for upside.
                                    </span>
                                </li>
                            </ul>

                            <div className='text-purple3'>Comparable Growth Potential</div>
                            <ul className='list-inside list-disc text-purple3'>
                                <li className='py-4'>
                                    <span className='text-white'>
                                        FDV comparison with similar projects on Ethereum highlights our untapped growth
                                        potential.
                                    </span>
                                </li>
                            </ul>

                            <div className='text-purple3'>Upcoming Milestones</div>
                            <ul className='list-inside list-disc text-purple3'>
                                <li className='py-4'>
                                    <span className='text-white'>
                                        Exciting product updates and market growth to benefit early investors.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex max-w-[800px] flex-col items-start gap-8 md:grid md:grid-flow-row md:grid-cols-2'>
                        <div className='flex flex-row items-center gap-4'>
                            <div className='flex h-14 w-14 place-content-center items-center rounded-2xl bg-gradient-radial from-purple1 to-purple2 text-3xl'>
                                06
                            </div>
                            <div className='inline-block bg-brush bg-contain bg-bottom bg-no-repeat pb-2 text-left text-2xl font-bold'>
                                TON Ecosystem
                            </div>
                        </div>
                        <div className='text-left text-lg'>
                            TON ecosystem is still quite young, as TON become more mature and growth that has a big
                            potential, Hipo as a project built on TON will grow as well.
                        </div>
                    </div>
                </div>

                <div className='mb-32 px-8'>
                    <div className='mb-16 text-4xl font-bold'>$HPO Utility</div>
                    <div className='grid grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2'>
                        <div className='px4 rounded-3xl border border-purple3 text-left'>
                            <div className='flex flex-col gap-4 p-8'>
                                <div className='flex flex-row items-center gap-4'>
                                    <img src='money.svg' className='h-12 w-12 object-contain' alt='Money Icon' />
                                    <p className='text-2xl font-bold text-purple3'>Earn Profit Shares</p>
                                </div>
                                <p className='text-xl'>
                                    Receive periodic distributions from Hipo Protocol`&apos;`s profits.
                                </p>
                            </div>
                        </div>
                        <div className='px4 rounded-3xl border border-purple3 text-left'>
                            <div className='flex flex-col gap-4 p-8'>
                                <div className='flex flex-row items-center gap-4'>
                                    <img src='hat.svg' className='h-12 w-12 object-contain' alt='Hat Icon' />
                                    <p className='text-2xl font-bold text-purple3'>Boost Hipo Gang Earnings</p>
                                </div>
                                <p className='text-xl'>
                                    Hold $HPO to earn extra in-game coins and qualify for $HPO airdrops.
                                </p>
                            </div>
                        </div>
                        <div className='px4 rounded-3xl border border-purple3 text-left'>
                            <div className='flex flex-col gap-4 p-8'>
                                <div className='flex flex-row items-center gap-4'>
                                    <img
                                        src='percentage.svg'
                                        className='h-12 w-12 object-contain'
                                        alt='Percentage Icon'
                                    />
                                    <p className='text-2xl font-bold text-purple3'>Access Exclusive Offers</p>
                                </div>
                                <p className='text-xl'>
                                    Unlock special discounts, rewards, and perks within the Hipo community.
                                </p>
                            </div>
                        </div>
                        <div className='px4 rounded-3xl border border-purple3 text-left'>
                            <div className='flex flex-col gap-4 p-8'>
                                <div className='flex flex-row items-center gap-4'>
                                    <img
                                        src='governance.svg'
                                        className='h-12 w-12 object-contain'
                                        alt='Governance Icon'
                                    />
                                    <p className='text-2xl font-bold text-purple3'>Participate in Governance</p>
                                </div>
                                <p className='text-xl'>
                                    Shape the future of Hipo by voting on upgrades, strategies, and key decisions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-32 px-4'>
                    <div className='my-4 text-4xl font-bold'>Partners</div>
                    <div className='mx-auto mb-8 w-2/3 text-xl leading-relaxed'>
                        Get a 5% bonus airdrop by holding
                        <div className='inline-block whitespace-nowrap bg-brush bg-contain bg-bottom bg-no-repeat font-bold'>
                            $100 worth of $HPO
                        </div>
                        and any partner token or NFT at the snapshot!
                    </div>
                    <div className='grid grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2'>
                        <div className='flex flex-row items-center gap-4 rounded-2xl border border-purple3 border-opacity-20 bg-slate-300 p-4 text-black'>
                            <div className='flex w-28 flex-none flex-col items-center gap-2'>
                                <img
                                    src='partners/stonfi.png'
                                    className='h-12 w-12 object-contain'
                                    alt='STON.fi Logo'
                                />
                                <div className='font-bold'>STON.fi</div>
                            </div>
                            <div className='flex-1 text-left'>
                                Hold <b className='font-bold'>$100</b> worth of <b className='font-bold'>$STON</b>.
                            </div>
                        </div>

                        <div className='flex flex-row items-center gap-4 rounded-2xl border border-purple3 border-opacity-20 bg-slate-300 p-4 text-black'>
                            <div className='flex w-28 flex-none flex-col items-center gap-2'>
                                <img
                                    src='partners/tonnel.png'
                                    className='h-12 w-12 object-contain'
                                    alt='Tonnel Network Logo'
                                />
                                <div className='font-bold'>Tonnel Network</div>
                            </div>
                            <div className='flex-1 text-left'>
                                Hold <b className='font-bold'>$100</b> worth of <b className='font-bold'>$TONNEL</b> OR
                                at least
                                <b className='font-bold'>1 Tonnel Relayer NFT</b>.
                            </div>
                        </div>

                        <div className='flex flex-row items-center gap-4 rounded-2xl border border-purple3 border-opacity-20 bg-slate-300 p-4 text-black'>
                            <div className='flex w-28 flex-none flex-col items-center gap-2'>
                                <img
                                    src='partners/xrocket.svg'
                                    className='h-12 w-12 object-contain'
                                    alt='xRocket Logo'
                                />
                                <div className='font-bold'>xRocket</div>
                            </div>
                            <div className='flex-1 text-left'>
                                Hold <b className='font-bold'>$100</b> in <b className='font-bold'>$XROCK</b> OR at
                                least one NFT from the <b className='font-bold'>Cosmonauts</b> or
                                <b className='font-bold'>WL</b> collections.
                            </div>
                        </div>

                        <div className='flex flex-row items-center gap-4 rounded-2xl border border-purple3 border-opacity-20 bg-slate-300 p-4 text-black'>
                            <div className='flex w-28 flex-none flex-col items-center gap-2'>
                                <img src='partners/kingy.svg' className='h-12 w-12 object-contain' alt='Kingy Logo' />
                                <div className='font-bold'>Kingy</div>
                            </div>
                            <div className='flex-1 text-left'>
                                Hold <b className='font-bold'>$100</b> worth of <b className='font-bold'>$KINGY</b> OR
                                one of the <b className='font-bold'>48 Hipo x KINGY Heroes NFTs</b>.
                            </div>
                        </div>

                        <div className='flex flex-row items-center gap-4 rounded-2xl border border-purple3 border-opacity-20 bg-slate-300 p-4 text-black'>
                            <div className='flex w-28 flex-none flex-col items-center gap-2'>
                                <img src='partners/jvault.png' className='h-12 w-12 object-contain' alt='JVault Logo' />
                                <div className='font-bold'>JVault</div>
                            </div>
                            <div className='flex-1 text-left'>
                                Stake at least <b className='font-bold'>$100</b> worth <b className='font-bold'>$JVT</b>{' '}
                                on the JVault platform.
                            </div>
                        </div>

                        <div className='flex flex-row items-center gap-4 rounded-2xl border border-purple3 border-opacity-20 bg-slate-300 p-4 text-black'>
                            <div className='flex w-28 flex-none flex-col items-center gap-2'>
                                <img src='partners/aqua.png' className='h-12 w-12 object-contain' alt='Aqua Logo' />
                                <div className='font-bold'>Aqua</div>
                            </div>
                            <div className='flex-1 text-left'>
                                Hold <b className='font-bold'>$100</b> worth of <b className='font-bold'>$AquaUSD</b>.
                            </div>
                        </div>

                        <div className='flex flex-row items-center gap-4 rounded-2xl border border-purple3 border-opacity-20 bg-slate-300 p-4 text-black'>
                            <div className='flex w-28 flex-none flex-col items-center gap-2'>
                                <img
                                    src='partners/torch.png'
                                    className='h-12 w-12 object-contain'
                                    alt='Torch Finance Logo'
                                />
                                <div className='font-bold'>Torch Finance</div>
                            </div>
                            <div className='flex-1 text-left'>
                                Hold <b className='font-bold'>$100</b> worth of <b className='font-bold'>$TriTon</b>.
                            </div>
                        </div>

                        <div className='flex flex-row items-center gap-4 rounded-2xl border border-purple3 border-opacity-20 bg-slate-300 p-4 text-black'>
                            <div className='flex w-28 flex-none flex-col items-center gap-2'>
                                <img
                                    src='partners/tonraffles.jpg'
                                    className='h-12 w-12 object-contain'
                                    alt='Ton Raffles Logo'
                                />
                                <div className='font-bold'>Ton Raffles</div>
                            </div>
                            <div className='flex-1 text-left'>
                                Hold <b className='font-bold'>$100</b> worth of <b className='font-bold'>$RAFF</b>.
                            </div>
                        </div>

                        <div className='flex flex-row items-center gap-4 rounded-2xl border border-purple3 border-opacity-20 bg-slate-300 p-4 text-black'>
                            <div className='flex w-28 flex-none flex-col items-center gap-2'>
                                <img src='partners/web3.png' className='h-12 w-12 object-contain' alt='WEB3 Logo' />
                                <div className='font-bold'>WEB3</div>
                            </div>
                            <div className='flex-1 text-left'>
                                Hold <b className='font-bold'>$100</b> worth of <b className='font-bold'>$WEB3</b>.
                            </div>
                        </div>

                        <div className='flex flex-row items-center gap-4 rounded-2xl border border-purple3 border-opacity-20 bg-slate-300 p-4 text-black'>
                            <div className='flex w-28 flex-none flex-col items-center gap-2'>
                                <img src='partners/dyor.jpg' className='h-12 w-12 object-contain' alt='DYOR Logo' />
                                <div className='font-bold'>DYOR</div>
                            </div>
                            <div className='flex-1 text-left'>
                                Hold <b className='font-bold'>$100</b> worth of <b className='font-bold'>$DYOR</b>.
                            </div>
                        </div>

                        <div className='flex flex-row items-center gap-4 rounded-2xl border border-purple3 border-opacity-20 bg-slate-300 p-4 text-black'>
                            <div className='flex w-28 flex-none flex-col items-center gap-2'>
                                <img src='partners/fish.png' className='h-12 w-12 object-contain' alt='TON FISH Logo' />
                                <div className='font-bold'>TON FISH</div>
                            </div>
                            <div className='flex-1 text-left'>
                                Hold <b className='font-bold'>$100</b> worth of <b className='font-bold'>$FISH</b> or
                                <b className='font-bold'>$TPET</b>.
                            </div>
                        </div>

                        <div className='flex flex-row items-center gap-4 rounded-2xl border border-purple3 border-opacity-20 bg-slate-300 p-4 text-black'>
                            <div className='flex w-28 flex-none flex-col items-center gap-2'>
                                <img src='partners/tonco.png' className='h-12 w-12 object-contain' alt='TONCO Logo' />
                                <div className='font-bold'>TONCO</div>
                            </div>
                            <div className='flex-1 text-left'>
                                Provide <b className='font-bold'>$100</b> liquidity to
                                <b className='font-bold'>TON/USDT</b> pool on TONCO.
                            </div>
                        </div>

                        <div className='flex flex-row items-center gap-4 rounded-2xl border border-purple3 border-opacity-20 bg-slate-300 p-4 text-black'>
                            <div className='flex w-28 flex-none flex-col items-center gap-2'>
                                <img
                                    src='partners/tonhedge.jpg'
                                    className='h-12 w-12 object-contain'
                                    alt='TON Hedge Logo'
                                />
                                <div className='font-bold'>TON Hedge</div>
                            </div>
                            <div className='flex-1 text-left'>
                                Hold <b className='font-bold'>TON Hedge Trader SBT</b>.
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-32 px-4'>
                    <div className='my-4 text-4xl font-bold'>Airdrop</div>
                    <div className='mb-16 text-xl text-purple3'>First Season</div>
                    <div className='grid grid-flow-row grid-cols-2 text-left text-xl'>
                        <div className='bg-brush bg-left-bottom bg-no-repeat px-4 pb-2 font-bold'>Category</div>
                        <div className='bg-brush bg-left-bottom bg-no-repeat px-4 pb-2 font-bold'>
                            Airdrop Distribution
                        </div>

                        <div className='border-b border-b-purple3 border-opacity-20 p-4'>
                            Early Stakers
                            <br />
                            (500K & 1M TON TVL)
                        </div>
                        <div className='flex border-b border-b-purple3 border-opacity-20 p-4'>
                            2 weeks after TGE, 9 Dec 2024
                        </div>

                        <div className='border-b border-b-purple3 border-opacity-20 p-4'>NFT Holders</div>
                        <div className='border-b border-b-purple3 border-opacity-20 p-4'>+2 weeks, 23 Dec 2024</div>

                        <div className='border-b border-b-purple3 border-opacity-20 p-4'>Partners</div>
                        <div className='border-b border-b-purple3 border-opacity-20 p-4'>+2 weeks, 6 Jan 2025</div>

                        <div className='p-4'>Hipo Gang</div>
                        <div className='p-4'>+7 weeks, 25 Feb 2025</div>
                    </div>
                </div>

                <div className='mb-24 w-full px-8 text-left sm:px-32'>
                    <div className='my-16 text-center text-5xl font-bold'>FAQ</div>

                    <div className='mx-auto my-8 max-w-2xl'>
                        <div className='text-xl font-bold'>1. What is $HPO?</div>
                        <div className='my-4 text-purple3'>
                            $HPO is the governance token of Hipo Protocol, a liquid staking platform on TON. Holders of
                            $HPO receive profit shares, exclusive offers, and a voice in protocol decisions.
                        </div>
                    </div>
                    <div className='h-px w-full border-t border-purple3 border-opacity-50'></div>

                    <div className='mx-auto my-8 max-w-2xl'>
                        <div className='text-xl font-bold'>2. When is the TGE?</div>
                        <div className='my-4 text-purple3'>
                            The $HPO TGE took place on <b>25th November 2024 at 12:00 PM UTC</b>.
                        </div>
                    </div>
                    <div className='h-px w-full border-t border-purple3 border-opacity-50'></div>

                    <div className='mx-auto my-8 max-w-2xl'>
                        <div className='text-xl font-bold'>3. What was an ILO?</div>
                        <div className='my-4 text-purple3'>
                            An Initial Liquidity Offering (ILO) is an innovative token launch model where tokens are
                            offered directly on decentralized exchanges. It provides transparency, efficiency, and
                            community empowerment from day one.
                        </div>
                    </div>
                    <div className='h-px w-full border-t border-purple3 border-opacity-50'></div>

                    <div className='mx-auto my-8 max-w-2xl'>
                        <div className='text-xl font-bold'>4. Why is the TGE held through an ILO?</div>
                        <div className='my-4 text-purple3'>
                            <ol className='flex list-inside list-[lower-alpha] flex-col gap-4'>
                                <li>
                                    Decentralized: $HPO is launched using a decentralized solution that adheres to
                                    blockchain principles.
                                </li>
                                <li>
                                    Transparent: All liquidity and transactions are tracked on-chain for full
                                    visibility.
                                </li>
                                <li>
                                    Open to All: Participation requires only a TON-supported wallet—no KYC or
                                    complicated processes.
                                </li>
                                <li>
                                    Low Fees: Early supporters can benefit from minimal costs, maximizing their returns.
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className='h-px w-full border-t border-purple3 border-opacity-50'></div>

                    <div className='mx-auto my-8 max-w-2xl'>
                        <div className='text-xl font-bold'>5. What is the price of $HPO?</div>
                        <div className='my-4 text-purple3'>
                            The initial price of $HPO on the DEX was $0.02. After listing, the price is determined by
                            market demand and supply. Our goal is to list at a modest price, allowing early supporters
                            to benefit from Hipo`&apos;`s long-term growth potential.
                        </div>
                    </div>
                    <div className='h-px w-full border-t border-purple3 border-opacity-50'></div>

                    <div className='mx-auto my-8 max-w-2xl'>
                        <div className='text-xl font-bold'>6. What is Initial FDV?</div>
                        <div className='my-4 flex flex-col gap-4 text-purple3'>
                            <p>
                                Initial FDV (Fully Diluted Valuation) is a key metric for evaluating an IDO. It
                                represents the theoretical value of a project if all tokens were in circulation based on
                                the token price during the IDO.
                            </p>
                            <p>
                                Calculation:
                                <br />
                                <span className='mx-8 italic'>Initial FDV=IDO Price &times; Total Token Supply</span>
                            </p>
                            <p>For Hipo:</p>
                            <ul className='list-inside list-disc'>
                                <li>Total Token Supply = 1,000,000,000 tokens</li>
                                <li>ILO Price = $0.02</li>
                                <li className='font-bold'>Initial FDV = $20,000,000</li>
                            </ul>
                        </div>
                    </div>
                    <div className='h-px w-full border-t border-purple3 border-opacity-50'></div>

                    <div className='mx-auto my-8 max-w-2xl'>
                        <div className='text-xl font-bold'>7. How can FDV you make an investment decision?</div>
                        <div className='my-4 text-purple3'>
                            Compare the Initial FDV with the project`&apos;`s potential to assess if the FDV aligns with
                            its current stage. Also, compare the FDV with similar projects in other blockchains to gauge
                            its growth potential.
                        </div>
                    </div>
                    <div className='h-px w-full border-t border-purple3 border-opacity-50'></div>

                    <div className='mx-auto my-8 max-w-2xl'>
                        <div className='text-xl font-bold'>
                            8. Why does $HPO have great growth potential for early investors?
                        </div>
                        <div className='my-4 text-purple3'>
                            <ol className='flex list-inside list-[lower-alpha] flex-col gap-4'>
                                <li>
                                    Market Opportunity: Only 12% of 500M stakable TON is in liquid staking, leaving vast
                                    room for growth.
                                </li>
                                <li>
                                    Highest APY: Hipo has delivered top returns, and with TON`&apos;`s decentralization,
                                    it is positioned to capture a larger market share.
                                </li>
                                <li>
                                    No Private Fundraising: Early investors can acquire $HPO at a modest price, offering
                                    upside potential.
                                </li>
                                <li>
                                    Comparable Growth Potential: When compared to similar projects on Ethereum, $HPO
                                    shows significant untapped potential.
                                </li>
                                <li>
                                    Upcoming Milestones: Key product updates and market expansion will further benefit
                                    early investors.
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className='h-px w-full border-t border-purple3 border-opacity-50'></div>

                    <div className='mx-auto my-8 max-w-2xl'>
                        <div className='text-xl font-bold'>9. How can I become a $HPO holder?</div>
                        <div className='my-4 flex flex-col gap-4 text-purple3'>
                            <p>There are two main ways to become a $HPO holder:</p>
                            <ol className='flex list-inside list-[lower-alpha] flex-col gap-4'>
                                <li>
                                    <b className='font-bold'>Buy $HPO</b>: You can purchase $HPO from listed markets.
                                </li>
                                <li>
                                    <b className='font-bold'>Airdrops</b>: Become eligible for $HPO airdrops by
                                    participating in our ecosystem.
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className='h-px w-full border-t border-purple3 border-opacity-50'></div>

                    <div className='mx-auto my-8 max-w-2xl'>
                        <div className='text-xl font-bold'>10. How can I become eligible for $HPO airdrops?</div>
                        <div className='my-4 flex flex-col gap-4 text-purple3'>
                            <p>
                                We announce Hipo airdrop plans regularly in our official channels. The two most
                                effective ways to qualify are:
                            </p>
                            <ol className='flex list-inside list-[lower-alpha] flex-col gap-4'>
                                <li>
                                    <b className='font-bold'>Stake Your TON</b>: Stake your TON with Hipo to become
                                    eligible.
                                </li>
                                <li>
                                    <b className='font-bold'>Join Hipo Gang</b>: Earn in-game coins, and boost your
                                    chances.
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className='h-px w-full border-t border-purple3 border-opacity-50'></div>

                    <div className='mx-auto my-8 max-w-2xl'>
                        <div className='text-xl font-bold'>11. How to Buy $HPO?</div>
                        <div className='my-4 text-purple3'>
                            <ol className='flex list-inside list-[lower-alpha] flex-col gap-4'>
                                <li>Get a TON-supported Wallet.</li>
                                <li>Ensure You Have TON for your desired $HPO purchase.</li>
                                <li>Head to the listed DEXs and connect your TON wallet.</li>
                                <li>Swap TON for $HPO, and receive $HPO instantly in your wallet!</li>
                            </ol>
                        </div>
                    </div>
                    <div className='h-px w-full border-t border-purple3 border-opacity-50'></div>

                    <div className='mx-auto my-8 max-w-2xl'>
                        <div className='text-xl font-bold'>12. How do you manage sell pressure after airdrops?</div>
                        <div className='my-4 text-purple3'>
                            <p>
                                While the market determines whether holders sell or keep HPO, our approach focuses on:
                            </p>
                            <ol className='flex list-inside list-[lower-alpha] flex-col gap-4'>
                                <li>
                                    Airdropping tokens to those who bring real value to the Hipo ecosystem, attracting
                                    long-term believers.
                                </li>
                                <li>
                                    Developing Hipo`&apos;`s products and market, creating long-term growth
                                    opportunities for HPO holders, and ensuring that any sell pressure becomes an
                                    opportunity for committed supporters to accumulate more HPO.
                                </li>
                            </ol>
                        </div>
                    </div>
                    {/* <!-- <div className='border-purple3 h-px w-full border-t border-opacity-50'></div> --> */}
                </div>
            </div>
        </div>
    )
})

export default Landing
