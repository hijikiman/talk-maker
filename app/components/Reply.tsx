const Reply = ({ is_receive, message }: { is_receive: bool; message: string }) => {
    return (
        <>
            <div className="pl-3">
                <div className="triangle-left" />
                <span className="bg-white rounded-2xl px-4 py-3">{message}</span>
            </div>
            <style jsx>{`
                .triangle-left {
                    background: white;
                    width: 10px;
                    height: 10px;
                    clip-path: polygon(100% 0, 0 0, 100% 100%);
                    transform: translate(-5px, 3px);
                }
            `}</style>
        </>
    )
}

export default Reply
