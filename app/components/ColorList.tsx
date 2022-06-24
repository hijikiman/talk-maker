import ColorListItem from './ColorListItem'
import { ColorsType } from '../types'

const ColorList = ({
    colors,
    onChangeColors = () => {},
}: {
    colors: ColorsType
    onChangeColors: (target: keyof ColorsType, value: string) => void
}) => {
    return (
        <div className="my-7 px-5">
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
                        label="Reply Received Balloon Color"
                        color={colors.is_receive}
                        onChangeColors={onChangeColors}
                    />
                </li>
                <li className="mt-6">
                    <ColorListItem
                        target="is_not_receive"
                        label="Your Reply Balloon Color"
                        color={colors.is_not_receive}
                        onChangeColors={onChangeColors}
                    />
                </li>
            </ul>
        </div>
    )
}

export default ColorList
