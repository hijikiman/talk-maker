import Image from 'next/image'
import Reply from '../components/Reply'
import MessageControl from '../components/MessageControl'
import ColorList from '../components/ColorList'
import { Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import { useState } from 'react'
import html2canvas from 'html2canvas'

interface MsgType {
    is_receive: boolean
    message: string
}

export interface ColorsType {
    background: string
    is_receive: string
    is_not_receive: string
}

const Main = () => {
    const [messageList, setMessageList] = useState<MsgType[]>([])
    const [colors, setColors] = useState<ColorsType>({
        background: '#60A5FA',
        is_receive: '#ffffff',
        is_not_receive: '#94df84',
    })

    const addMessage = (isReceive: boolean, message: string) => {
        setMessageList([
            ...messageList,
            {
                is_receive: isReceive,
                message: message,
            },
        ])
    }

    const onChangeColors = (target: keyof ColorsType, value: string) => {
        const targetList = ['background', 'is_receive', 'is_not_receive']
        if (targetList.includes(target)) {
            let newColors = { ...colors }
            newColors[target] = value
            setColors(newColors)
        }
    }

    const saveElementAsImage = () => {
        const filename = 'generated_by_talk-maker.jpg'
        const target = document.querySelector('#talking-area') as HTMLElement
        if (target !== null) {
            target.classList.add('fix-shift')
            html2canvas(target, {
                width: target.clientWidth,
                height: target.clientHeight,
            }).then((canvas) => {
                let a = document.createElement('a')
                a.href = canvas.toDataURL('image/png')
                a.download = filename
                a.click()
            })
            target.classList.remove('fix-shift')
        }
    }

    return (
        <div className="font-noto">
            <div className="flex justify-center items-center pt-20 pb-14">
                <Image src="/logo.png" alt="Vercel Logo" width={406} height={68} />
            </div>
            <div className="max-w-2xl pt-7 px-3 pb-12 mx-auto flex flex-col md:flex-row items-center md:items-start">
                <div>
                    <p>チャット画面を作成し、画像としてダウンロードできるサービスです。</p>
                    <ColorList colors={colors} onChangeColors={onChangeColors} />
                </div>
                <div className="w-80 px-2.5">
                    <div id="talking-area" className="py-11 talking-area-bg-color">
                        <ul>
                            {messageList.map((item, key) => (
                                <li key={key} className="mt-3">
                                    <Reply
                                        is_receive={item.is_receive}
                                        message={item.message}
                                        color={colors}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <MessageControl addMessage={addMessage} />
                    <div className="border-t border-solid border-gray-400 pt-7 pb-3">
                        <Button
                            type="primary"
                            icon={<DownloadOutlined />}
                            block
                            onClick={saveElementAsImage}
                        >
                            SAVE IMAGE
                        </Button>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .talking-area-bg-color {
                        background-color: ${colors.background};
                    }
                `}
            </style>
        </div>
    )
}

export default Main
