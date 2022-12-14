import styles from './Nav.module.css'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext';

export default function Nav () {
    const { logout } = useLogout();
    const { user } = useAuthContext();
    
    return (
        <nav className={styles.nav}>
            <h1 className={styles.title}>λΉλ°μΌκΈ° π©βπ»</h1>
            <ul className={styles.list_nav}>
                {!user && 
                    <>
                        <li><Link to='/login'>λ‘κ·ΈμΈ</Link></li>
                        <li><Link to='/signup'>νμ κ°μ</Link></li>
                    </>
                }
                {user && 
                    <li>
                        <strong>νμν©λλ€. {user.displayName}λ</strong>
                        <button type='button' onClick={logout}>λ‘κ·Έμμ</button>
                    </li>
                }
            </ul>
        </nav>
    )
}