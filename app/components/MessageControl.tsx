import { Form, Input, Button } from 'antd'

const MessageControl = ({ addMessage }: { addMessage: VoidFunction }) => {
    const [form] = Form.useForm()

    const onFinish = () => {
        addMessage(form.getFieldsValue().message)
    }

    return (
        <div className="my-9">
            <Form form={form} name="control-hooks" onFinish={onFinish}>
                <Form.Item name="message" label="Message" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <div className="flex justify-end">
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default MessageControl
