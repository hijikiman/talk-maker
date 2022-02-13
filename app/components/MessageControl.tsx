import { Form, Radio, Input, Button } from 'antd'
import { useState } from 'react'

const MessageControl = ({
    addMessage = () => {},
}: {
    addMessage: (isReceive: boolean, message: string) => void
}) => {
    const [form] = Form.useForm()

    const onFinish = () => {
        addMessage(form.getFieldsValue().isReceive, form.getFieldsValue().message)
        const value = form.getFieldsValue()
        form.setFieldsValue({ ...value, message: '' })
    }

    return (
        <div className="my-9">
            <Form form={form} name="control-hooks" onFinish={onFinish}>
                <Form.Item name="isReceive" label="">
                    <Radio.Group defaultValue={false}>
                        <Radio value={true}>Reply Received</Radio>
                        <Radio value={false}>Your Reply</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name="message" label="Message" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <div className="flex justify-end">
                    <Button type="primary" htmlType="submit">
                        ADD MESSAGE
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default MessageControl
