import React from 'react';
import styles from './tabs.module.scss';
import { TabItem } from '../../models/index';

type Props = {
  data: Array<TabItem>;
};

export const Tabs = (props: Props) => {
  const [visibleTab, setVisibleTab] = React.useState(props.data[0].id);

  const listTitles = props.data.map((item) =>
    <li key={item.id} onClick={() => setVisibleTab(item.id)}
        className={`${styles.title} ${visibleTab === item.id ? styles.titleActive : ''}`}>{item.title}</li>
  );

  const listContent = props.data.map((item) =>
    <p key={item.id} style={visibleTab === item.id ? {} : { display: 'none' }}>{item.content}</p>
  );

  return (
    <div className={styles.tabs}>
      <ul className={styles.titles}>
        {listTitles}
      </ul>
      <div className={styles.content}>
        {listContent}
      </div>
    </div>
  )
};
