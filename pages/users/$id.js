
import styles from './$id.css';
export default function $id(props) {
  return (
    <div className={styles.normal}>
      <h1>Pager user</h1>
      <div>{props.match.params.id}</div>
    </div>
  )
}
