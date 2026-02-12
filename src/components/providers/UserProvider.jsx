'use client';

import { useEffect } from 'react';
import useUserStore from '@/store/userStore';

export default function UserProvider({ currentUser }) {
    const setUser = useUserStore((state) => state.setUser);

    useEffect(() => {
        setUser(currentUser);
    }, [currentUser, setUser]);

    return null;
}
