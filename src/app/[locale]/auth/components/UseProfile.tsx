'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';

// Define types for the API response
type UserData = {
    id: string;
    firstName: string;
    lastName: string;
    userName: string;
    avatar: string | null;
    createdAt: string;
    updatedAt: string;
};

type ApiResponse = {
    success: boolean;
    message: string;
    data: UserData;
};

const UserProfile = () => {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get<ApiResponse>('http://localhost:3000/user', {
                    withCredentials: true, // Send cookies for auth
                });
                setUserData(response.data.data);
            } catch (err) {
                if (axios.isAxiosError(err)) {
                    setError(err.response?.data?.message || 'Failed to fetch user data');
                } else {
                    setError('An unknown error occurred');
                }
                console.error('Error fetching user:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) return <div>Loading user data...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!userData) return <div>No user data found.</div>;

    return (
        <div className="user-profile">
            <h2>User Profile</h2>
            <div>
                <p><strong>First Name:</strong> {userData.firstName}</p>
                <p><strong>Last Name:</strong> {userData.lastName}</p>
                <p><strong>Username:</strong> {userData.userName}</p>
                <p><strong>Joined:</strong> {new Date(userData.createdAt).toLocaleDateString()}</p>
            </div>
        </div>
    );
};

export default UserProfile;