import axios from "axios";

const BASE_URL = "https://api.example.com"; // Backend API manzilini shu yerda o'zgartiring

// Axios instance yaratish
const api = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

// Request interceptor (Har bir so‘rov yuborishdan oldin ishlaydi)
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token"); // Tokenni localStorage'dan olish
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // Tokenni headerga qo‘shish
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor (Backend'dan javob kelganda ishlaydi)
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Agar token eskirgan bo‘lsa, foydalanuvchini login sahifasiga yo‘naltirish
            localStorage.removeItem("token");
            window.location.href = "/sign-in";
        }
        return Promise.reject(error);
    }
);

export default api;
