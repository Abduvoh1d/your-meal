import { Select } from "antd"
import { useTranslation } from "react-i18next"
import { useMemo } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const LanguageCom = () => {
	const { i18n } = useTranslation()
	const navigate = useNavigate()
	const location = useLocation()

	const languages = useMemo(
		() => [
			{ value: "uz", label: "Uzbek" },
			{ value: "ru", label: "Russian" },
			{ value: "en", label: "English" },
		],
		[]
	)

	const handleChange = (value: string) => {
		const newPath = location.pathname.replace(/^\/(uz|ru|en)/, `/${value}`)
		i18n.changeLanguage(value)
		navigate(newPath, { replace: true })
	}

	return (
		<Select
			value={i18n.language}
			className="h-[40px] w-[120px]"
			onChange={handleChange}
			options={languages}
			variant="outlined"
		/>
	)
}

export default LanguageCom
