import ColorListItem from './ColorListItem'

const ColorList = ({
    colors,
    onChangeColors = () => {},
}: {
    colors: {
        background: string
        is_receive: string
        is_not_receive: string
    }
    onChangeColors: (target: string, value: string) => void
}) => {
    return (
        <div className="my-7">
            <ul>
                <li>
                    <ColorListItem
                        target="background"
                        label="Background Color"
                        color={colors.background}
                        onChangeColors={onChangeColors}
                    />
                </li>
                <li className="mt-6">
                    <ColorListItem
                        target="is_receive"
                        label="Reply Received Baloon Color"
                        color={colors.is_receive}
                        onChangeColors={onChangeColors}
                    />
                </li>
            </ul>
        </div>
    )
}

export default ColorList
