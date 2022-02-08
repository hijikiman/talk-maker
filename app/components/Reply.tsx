interface Color {
    is_receive: string
    is_not_receive: string
}

const Reply = ({
    is_receive,
    message,
    color,
}: {
    is_receive: boolean
    message: string
    color: Color
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
                    <span>{message}</span>
                </div>
            </div>
            <style jsx>{`
                .triangle-left {
                    background: ${color.is_receive};
                    width: 13px;
                    height: 13px;
                    clip-path: polygon(100% 0, 0 0, 100% 100%);
                    position: absolute;
                    left: 6px;
                    top: 4px;
                }
                .triangle-right {
                    background: ${color.is_not_receive};
                    width: 13px;
                    height: 13px;
                    clip-path: polygon(100% 0, 0 0, 0 100%);
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
