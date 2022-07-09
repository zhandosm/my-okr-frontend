import axios, { AxiosRequestConfig } from "axios";
import { useRouter } from "next/router";

export const LogoutButton = () => {
    const router = useRouter();
    const handleLogout = () => {
        const axiosConfig:AxiosRequestConfig = { withCredentials: true };
        axios.post(`${process.env.API_HOST}/auth/logout`, {}, axiosConfig)
            .then(res=>router.reload())
            .catch(err => alert("Error occurred while logging out"));
    }

    return <button className="h-9 w-9 cursor-pointer text-mored active:text-mored hover:bg-opacity-70 bg-molightred active:opacity-70 bg-plainwhite rounded-lg flex items-center justify-center absolute bottom-3 transition-all" onClick={handleLogout}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 18H7C5.89543 18 5 17.1046 5 16V12H7V16H16V2H7V6H5V2C5 0.89543 5.89543 0 7 0H16C17.1046 0 18 0.89543 18 2V16C18 17.1046 17.1046 18 16 18ZM9 13V10H0V8H9V5L14 9L9 13Z" fill="currentColor"/>
        </svg>
    </button>
}