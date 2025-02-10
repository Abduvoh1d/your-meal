import { Button, Col, Form, FormProps, Input, Row } from "antd"
import loginImg from "../../assets/img/loginImg.svg"
import { useCallback } from "react"

function SignIn() {

    const onFinish: FormProps['onFinish'] = useCallback((values: any) => {
        console.log(values)
    }, []);


    return (
        <Row className="w-full max-h-screen flex items-center bg-[#EDEFF3]">
            <Col span={15}>
                <img
                    src={loginImg}
                    alt="Auth Img"
                    className="max-h-screen w-full object-cover"
                />
            </Col>
            <Col
                span={9}
                className="flex flex-col items-center justify-center"
            >
                <div>
                    <p className="text-[24px] text-start font-bold">
                        Tizimga xush kelibsiz!
                    </p>
                    <p className="text-[16px] text-[#8D9BA8] text-start w-72">
                        Tizimga kirish uchun, login va parol orqali
                        autentifikatsiya jarayonidan o’ting
                    </p>
                </div>
                <Form
                    name="basic"
                    layout="vertical"
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    className="w-[300px] mt-10"
                >
                        <Form.Item
                            name="username"
                            rules={[{required: true, message: 'Please input your email!'}]}
                        >
                            <Input placeholder="Email" className="h-14 ps-5"/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{required: true, message: 'Please input your password!'}]}
                        >
                            <Input.Password placeholder="Parol" className="h-14 ps-5 "/>
                        </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="w-full h-14 bg-[#2D3A45] hover:!bg-[#2D3A45]"
                        >
                            Tizimga kirish
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}

export default SignIn
