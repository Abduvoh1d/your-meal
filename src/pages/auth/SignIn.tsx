import { Button, Col, FormProps, Row } from "antd"
import loginImg from "../../assets/img/loginImg.svg"
import { AutoForm, IAutoForm } from "../../components/auto-form"
import { useForm } from "antd/es/form/Form"
import { Link } from "react-router-dom"

function SignIn() {
    const [form] = useForm()

    const data: IAutoForm[] = [
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
            <Col span={15}>
                <img src={loginImg} alt="Auth Img" className="max-h-screen w-full object-cover" />
            </Col>
            <Col span={9} className="flex flex-col items-center justify-center">
                <div>
                    <p className="text-[24px] text-start font-bold">Tizimga xush kelibsiz!</p>
                    <p className="text-[16px] text-[#8D9BA8] text-start w-72">
                        Tizimga kirish uchun, login va parol orqali autentifikatsiya jarayonidan o’ting
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
                    <Link to={"/sign-up"} className={"hover:text-black"}>
                        Ro'yxatdan o'tish
                    </Link>
                </div>

                <Button
                    type={"primary"}
                    className={"w-[300px] py-[28px] bg-[#2D3A45] hover:!bg-[#2D3A45]"}
                    size={"large"}
                    onClick={() => form.submit()}
                >
                    Kirish
                </Button>
            </Col>
        </Row>
    )
}

export default SignIn
