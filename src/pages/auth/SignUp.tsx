import { Button, Col, FormProps, Row } from "antd"
import loginImg from "../../assets/img/loginImg.svg"
import { AutoForm, IAutoForm } from "../../components/auto-form"
import { useForm } from "antd/es/form/Form"
import { Link } from "react-router-dom"

function SignUp() {
    const [form] = useForm()

    const data: IAutoForm[] = [
        {
            name: "username",
            type: "input",
            span: 24,
            placeholder: "Username",
            className: "!h-[45px] ps-[20px]",
            required: true,
        },
        {
            name: "email",
            type: "input",
            span: 24,
            placeholder: "Email",
            className: "!h-[45px] ps-[20px]",
            required: true,
        },
        {
            name: "password",
            type: "password",
            span: 24,
            placeholder: "Password",
            className: "!h-[45px] ps-[20px]",
            required: true,
        },
    ]

    const onFinish: FormProps["onFinish"] = (values: unknown) => {
        console.log(values)
    }

    return (
        <Row className="w-full h-screen flex items-center bg-[#EDEFF3]">
            <Col span={9} className="flex flex-col items-center justify-center">
                <div>
                    <p className="text-[24px] text-start font-bold">Ro'yxatdan o'tish</p>
                    <p className="text-[16px] text-[#8D9BA8] text-start w-72">
                        Ro'yxatdan o'tish uchun: username, login va parol orqali registratsiya jarayonidan o’ting
                    </p>
                </div>
                <AutoForm
                    data={data}
                    form={form}
                    onFinish={onFinish}
                    layout={"vertical"}
                    className={"mt-[30px] w-[300px]"}
                />

                <div className={"mb-[20px] w-[300px] flex justify-end"}>
                    <Link to={"/sign-in"} className={"hover:text-black"}>
                        Tizimga kirish
                    </Link>
                </div>

                <Button
                    type={"primary"}
                    className={"w-[300px] py-[28px] bg-[#2D3A45] hover:!bg-[#2D3A45]"}
                    size={"large"}
                    onClick={() => form.submit()}
                >
                    Ro'yxatdan o'tish
                </Button>
            </Col>
            <Col span={15}>
                <img src={loginImg} alt="Auth Img" className="max-h-screen w-full object-cover" />
            </Col>
        </Row>
    )
}

export default SignUp
