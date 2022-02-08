import Image from 'next/image'
import Reply from '../components/Reply'
import MessageControl from '../components/MessageControl'
import { useState } from 'react'

const Main = () => {
    const [messageList, setMessageList] = useState([])

    const color = { is_receive: '#ffffff', is_not_receive: '#94df84' }

    const addMessage = (isReceive: boolean, message: string) => {
        setMessageList([
            ...messageList,
            {
                is_receive: isReceive,
                message: message,
            },
        ])
    }

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
                    <div className="py-11 bg-blue-400">
                        <ul>
                            {messageList.map((item, key) => (
                                <li key={key} className="mt-3">
                                    <Reply
                                        is_receive={item.is_receive}
                                        message={item.message}
                                        color={color}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <MessageControl addMessage={addMessage} />
                </div>
            </div>
        </>
    )
}

export default Main
