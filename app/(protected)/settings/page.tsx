import {auth, signOut} from '@/auth'

const SettingsPage = async () => {
    const session = await auth()
    return (
        <div>
            Settings
            <form
                action={async () => {
                    'use server'
                    await signOut()
                }}
            >
                {JSON.stringify(session)}
                <button type="submit">sign out</button>
            </form>
        </div>
    )
}

export default SettingsPage
