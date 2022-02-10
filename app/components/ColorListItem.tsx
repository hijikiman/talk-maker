import { HexColorPicker } from 'react-colorful'
import { useState } from 'react'

const ColorListItem = ({
    target,
    label,
    color,
    onChangeColors,
}: {
    target: string
    label: string
    color: string
    onChangeColors: (target: string, value: string) => void
}) => {
    const [colorPickerIsOpen, setColorPickerIsOpen] = useState<boolean>(false)

    const handleColorPickerIsOpen = () => {
        setColorPickerIsOpen(!colorPickerIsOpen)
    }

    const onChange = (newColor: string) => {
        onChangeColors(target, newColor)
    }

    return (
        <>
            <div className="flex justify-between">
                <span>{label}</span>
                <button
                    className="w-6 h-6 border border-gray-700 rounded-lg buttonColor"
                    onClick={handleColorPickerIsOpen}
                />
            </div>
            {colorPickerIsOpen && (
                <div className="flex justify-center mt-3">
                    <HexColorPicker color={color} onChange={onChange} />
                </div>
            )}

            <style jsx>
                {`
                    .buttonColor {
                        background-color: ${color};
                    }
                `}
            </style>
        </>
    )
}

export default ColorListItem
