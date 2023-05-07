import styles from './pageHeader.module.scss';

export default function PageHeader(props: any) {
  return (
    <div className='pt-4  pb-10 flex justify-center'>
      <h1 className={`${styles.pageHeading} font-bold font-mono text-center text-accent-1`}>
        <span>{props.children}</span>
      </h1>
    </div>
  );
}
