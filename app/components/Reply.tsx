import { BalloonColorsType } from '../types'

const Reply = ({
    is_receive,
    message,
    color,
}: {
    is_receive: boolean
    message: string
    color: BalloonColorsType
}) => {
    const switch_color = () => {
        return is_receive ? color.is_receive : color.is_not_receive
    }

    return (
        <div>
            <div
                className={'px-3 relative flex' + (is_receive ? ' justify-start' : ' justify-end')}
            >
                <div className={is_receive ? 'triangle-left' : 'triangle-right'} />
                <div className="inline-block balloon-background-color rounded-2xl px-4 py-3">
                    <p className="mb-0">{message}</p>
                </div>
            </div>
            <style jsx>{`
                .triangle-left {
                    border-style: solid;
                    border-width: 0 13px 13px 0;
                    border-color: transparent ${color.is_receive} transparent transparent;
                    position: absolute;
                    left: 6px;
                    top: 4px;
                }
                .triangle-right {
                    border-style: solid;
                    border-width: 13px 13px 0 0;
                    border-color: ${color.is_not_receive} transparent transparent transparent;
                    position: absolute;
                    right: 6px;
                    top: 4px;
                }
                .balloon-background-color {
                    background-color: ${switch_color()};
                }
            `}</style>
        </div>
    )
}

export default Reply
