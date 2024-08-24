import styles from "@/styles/Home.module.css";


export default function Headline(props) {
    console.log(props);
    return (
        <div>
            <p>
                Get started by editing&nbsp;
                <code className={styles.code}>src/pages/{props.page}</code>
            </p>
        </div>
    );
}
