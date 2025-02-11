class AuthPages {
    Login = "sign-in"
    Register = "sign-up"
}

class AdminPages {
    Buyurtmalar = "orders"
    Maxsulotlar = "products"
    Kategorylar = "categorys"
    Filialar = "filials"
    Mijozlar = "customers"
    Xisobot = "dashboard"
}

class UserPages {
    Asosiy = "main"
}

export const AuthPagesConfig = new AuthPages()
export const AdminPagesConfig = new AdminPages()
export const UserPagesConfig = new UserPages()
