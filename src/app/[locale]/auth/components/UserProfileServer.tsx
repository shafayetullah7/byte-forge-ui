import { cookies } from 'next/headers';

interface UserData {
    id: string;
    firstName: string;
    lastName: string;
    userName: string;
    avatar: string | null;
    createdAt: string;
    updatedAt: string;
}

async function fetchUserWithCookies(): Promise<UserData | null> {
    const cookieStore = cookies();
    const authCookies = (await cookieStore)
        .getAll()
        .map(cookie => `${cookie.name}=${cookie.value}`)
        .join('; ');

    try {
        const response = await fetch(`http://localhost:3000/user`, {
            cache: 'no-store',
            headers: {
                Cookie: authCookies,
            },
            credentials: 'include',
        });

        if (!response.ok) return null;

        const { data } = await response.json();
        return data as UserData;
    } catch (error) {
        console.error('Failed to fetch user:', error);
        return null;
    }
}

export default async function UserProfileServer() {
    const userData = await fetchUserWithCookies();

    if (!userData) {
        return (
            <div className="p-4 border rounded-lg bg-rose-50 text-rose-800">
                Not authenticated or failed to load user data
            </div>
        );
    }

    return (
        <div className="p-6 border rounded-lg bg-white shadow-sm">
            <h2 className="text-xl font-semibold mb-4">User Profile (Server)</h2>
            <div className="space-y-2">
                <p><span className="font-medium">First Name:</span> {userData.firstName}</p>
                <p><span className="font-medium">Last Name:</span> {userData.lastName}</p>
                <p><span className="font-medium">Username:</span> {userData.userName}</p>
                <p><span className="font-medium">Member Since:</span> {new Date(userData.createdAt).toLocaleDateString()}</p>
            </div>
        </div>
    );
}