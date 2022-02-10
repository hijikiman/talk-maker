import ColorListItem from './ColorListItem'

const ColorList = ({
    colors,
    onChangeColors = () => {},
}: {
    colors: { background: string }
    onChangeColors: (target: string, value: string) => void
}) => {
    return (
        <div className="my-7">
            <ColorListItem
                target="background"
                label="Background Color"
                color={colors.background}
                onChangeColors={onChangeColors}
            />
        </div>
    )
}

export default ColorList
