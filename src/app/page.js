'use server'

import { permanentRedirect } from 'next/navigation'


export default async function App() {
    permanentRedirect(`/home`);
}