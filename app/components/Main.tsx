import Image from 'next/image'
import Reply from '../components/Reply'

const Main = () => {
    const color = { is_receive: '#ffffff', is_not_receive: '#94df84' }
    return (
        <>
            <div className="flex justify-center items-center pt-20 pb-14">
                <Image src="/logo.png" alt="Vercel Logo" width={384} height={68} />
            </div>
            <div className="max-w-2xl pt-7 px-3 pb-12 mx-auto flex flex-col md:flex-row items-center md:items-start">
                <div>
                    <p>チャット画面を作成し、画像としてダウンロードできるサービスです。</p>
                </div>
                <div className="w-80 px-2.5">
                    <div className="h-80 bg-blue-400">
                        <div>
                            <Reply is_receive message={'hogehoge'} color={color} />
                            <Reply message={'hogehoge'} color={color} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
