import { useState } from "react";
import { useRegisterMutation } from "../services/apiAccount";

const RegisterPage = () => {

    const [register, { isLoading }] = useRegisterMutation();

    const [form, setForm] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
        imageFile: null as File | null
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;

        if (files) {
            setForm(prev => ({
                ...prev,
                [name]: files[0]
            }));
        } else {
            setForm(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await register(form).unwrap();
            alert("Зареєстровано");
        } catch {
            alert("От халепа, програміста на мило");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-sm mx-auto"
        >

            <h2 className="text-2xl font-semibold text-center mb-6">
                Реєстрація
            </h2>

            <div className="space-y-4">

                <div>
                    <label htmlFor="name" className="block mb-2.5 text-sm font-medium text-heading">Ім'я</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Бобер"
                        onChange={handleChange}
                        className="bg-gray-100 border border-gray-200 text-heading text-sm rounded-xl outline-none focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 shadow-xs placeholder:text-body transition"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="lastName" className="block mb-2.5 text-sm font-medium text-heading">Прізвище</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Бобрівський"
                        onChange={handleChange}
                        className="bg-gray-100 border border-gray-200 text-heading text-sm rounded-xl outline-none focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 shadow-xs placeholder:text-body transition"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="bobrik@gmail.com"
                        onChange={handleChange}
                        className="bg-gray-100 border border-gray-200 text-heading text-sm rounded-xl outline-none focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 shadow-xs placeholder:text-body transition"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block mb-2.5 text-sm font-medium text-heading">Телефон</label>
                    <input
                        id="phone"
                        name="phone"
                        type="phone"
                        placeholder="+380 (67) 067 67 67"
                        onChange={handleChange}
                        className="bg-gray-100 border border-gray-200 text-heading text-sm rounded-xl outline-none focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 shadow-xs placeholder:text-body transition"
                        required
                    />
                </div>


                <div>
                    <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading">Пароль</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        onChange={handleChange}
                        className="bg-gray-100 border border-gray-200 text-heading text-sm rounded-xl outline-none focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 shadow-xs placeholder:text-body transition"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="imageFile" className="block mb-2.5 text-sm font-medium text-heading">Аватарка</label>
                    <input
                        name="imageFile"
                        type="file"
                        onChange={handleChange}
                        className="bg-gray-100 border border-gray-200 text-heading text-sm rounded-xl outline-none focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 shadow-xs placeholder:text-body transition"
                        required
                    />
                </div>
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
                {isLoading ? "щя щя підожди трохи..." : "Зареєструватись"}
            </button>
        </form>
    );
};

export default RegisterPage;