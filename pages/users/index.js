import Link from 'umi/link';
import router from 'umi/router';
import styles from './index.css';



export default function () {
  const users = [{ id: 1, name: 'Tom' }]
  return (
    <div className={styles.normal}>
      <h1>Page users List</h1>
      <ul>
        {/* {users.map(user => (
          <Link to={`/users/${user.id}`} >
            <li key={user.id}>{user.name}</li>
          </Link>)
        )} */}

        {users.map(user =>

          <li onClick={() => router.push(`/users/${user.id}`)} key={user.id}>{user.name}</li>

        )}

      </ul>
    </div>
  );
}
