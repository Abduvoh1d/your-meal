import { Button, Result } from "antd"
import { useTranslation } from "react-i18next"
import { AdminPagesConfig } from "../../config/page.config.ts"
import { Link } from "react-router-dom"

function NotFound() {
    const { i18n } = useTranslation()
    console.log(i18n.language)

    return (
        <div className={"w-[100%] h-[100vh] flex items-center justify-center"}>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Link to={`/admin/${AdminPagesConfig.Xisobot}`}>
                        <Button type="primary">Back Home</Button>
                    </Link>
                }
            />
        </div>
    )
}

export default NotFound
