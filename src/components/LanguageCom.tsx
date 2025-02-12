import { Select } from "antd";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

const LanguageCom = () => {
    const { i18n } = useTranslation();

    const languages = useMemo(() => [
        { value: "uz", label: "Uzbek" },
        { value: "ru", label: "Russian" },
        { value: "en", label: "English" },
    ], []);

    const handleChange = ({ value }: { value: string }) => {
        i18n.changeLanguage(value);
    };

    return (
        <Select
            labelInValue
            value={{ value: i18n.language, label: languages.find(lang => lang.value === i18n.language)?.label }}
            style={{ width: 120 }}
            onChange={handleChange}
            options={languages}
            variant="outlined"
        />
    );
};

export default LanguageCom;
