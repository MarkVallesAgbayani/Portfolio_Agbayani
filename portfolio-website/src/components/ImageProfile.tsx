import { LinkedinLogoIcon, GithubLogoIcon, MetaLogoIcon, InstagramLogoIcon} from '@phosphor-icons/react/dist/ssr'

type ImageProfileProps ={
        name: string;
        image: string;
        tag: string;
}

function ImageProfile({name, image, tag}: ImageProfileProps) {
    return (
        <div className="intro-card mx-auto my-8 flex w-full max-w-sm flex-col rounded-3xl bg-white p-4 font-sans shadow-lg sm:max-w-md sm:p-6 lg:max-w-lg">
            <div className="intro-image mx-auto flex w-full max-w-xs justify-center sm:max-w-sm">
                <img 
                    className="w-full rounded-2xl transition-all duration-450 hover:scale-105" 
                    src={image} 
                    alt="profile" 
                />
            </div>
            <div className="intro-copy mt-5 flex flex-col gap-3 text-center">
                <h1 className="text-3xl font-bold tracking-wide text-black sm:text-4xl" >{name}</h1>
                <p className="mx-auto max-w-xs text-sm font-semibold tracking-wide text-zinc-500 sm:max-w-sm sm:text-base">{tag}</p>
            </div>
            <div className="intro-socials flex flex-wrap items-center justify-center gap-5 p-5">
                <a
                    href='https://www.linkedin.com/in/mark-lui-agbayani-238292324/'
                    target='_blank'
                    rel="noreferrer"
                    className='cursor-pointer hover:scale-105 transition-all duration-300'
                >
                    <LinkedinLogoIcon size={32} color="#f46c38"/>
                </a>

                <a
                    href='https://github.com/MarkVallesAgbayani'
                    target='_blank'
                    rel="noreferrer"
                    className='cursor-pointer hover:scale-105 transition-all duration-300'
                >
                    <GithubLogoIcon size={32} color="#f46c38" />
                </a>
                
                <a
                    href='https://www.facebook.com/Mak.Agbayani12/'
                    target='_blank'
                    rel="noreferrer"
                    className='cursor-pointer hover:scale-105 transition-all duration-300'
                >
                    <MetaLogoIcon size={32} color="#f46c38" />
                </a>

                <a
                    href='https://www.instagram.com/mrkcellus19'
                    target='_blank'
                    rel="noreferrer"
                    className='cursor-pointer hover:scale-105 transition-all duration-300'
                >
                    <InstagramLogoIcon size={32} color="#f46c38" />
                </a>
            </div>
        </div>
    )
}

export default ImageProfile