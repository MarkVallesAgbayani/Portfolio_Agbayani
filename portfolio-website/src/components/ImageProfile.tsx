import { LinkedinLogoIcon, GithubLogoIcon, MetaLogoIcon, InstagramLogoIcon} from '@phosphor-icons/react/dist/ssr'

type ImageProfileProps ={
        name: string;
        image: string;
        tag: string;
}
function ImageProfile({name, image, tag}: ImageProfileProps) {
    return (
        <div className="bg-white w-90 flex flex-col mx-auto my-7 p-5 rounded-2xl font-sans">
            <div className="w-70 flex mx-auto">
                <img className="rounded-2xl" src={image} alt="profile" />
            </div>
            <div className="text-center flex flex-col gap-3 mt-5">
                <h1 className="text-black text-4xl font-bold tracking-wide" >{name}</h1>
                <p className="font-semibold text-zinc-500 tracking-wide w-80 text-md">{tag}</p>
            </div>
            <div className="flex gap-5 justify-center items-center p-5">
                <a
                    href='https://www.linkedin.com/in/mark-lui-agbayani-238292324/'
                    target='_blank'
                    className='cursor-pointer'
                >
                    <LinkedinLogoIcon size={32} color="#f46c38"/>
                </a>

                <a
                    href='https://github.com/MarkVallesAgbayani'
                    target='_blank'
                    className='cursor-pointer'
                >
                    <GithubLogoIcon size={32} color="#f46c38" />
                </a>
                
                <a
                    href='https://www.facebook.com/Mak.Agbayani12/'
                    target='_blank'
                    className='cursor-pointer'
                >
                    <MetaLogoIcon size={32} color="#f46c38" />
                </a>

                <a
                    href='https://www.instagram.com/mrkcellus19'
                    target='_blank'
                    className='cursor-pointer'
                >
                    <InstagramLogoIcon size={32} color="#f46c38" />
                </a>
            </div>
        </div>
    )
}

export default ImageProfile