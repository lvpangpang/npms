import React from "react";
import { Link } from "react-router-dom";
import { observer, useLocalStore } from "mobx-react";

import { Button } from "antd-mobile";

import store from "../../store";
import styles from "./index.less";

function Index(props) {
  const homeStore = useLocalStore(() => store.homeStore);
  return (
    <div className={styles.home_box}>
      <div className={styles.text}>{`首页数据: ${homeStore.num}`}</div>
      <div>
        <Button type="primary" onClick={homeStore.setNum}>
          点我
        </Button>
      </div>
      <br />
      <div className={styles.link}>
        <Link to={"/detail"}>去详情</Link>
        <Link to={"/list"}>去列表</Link>
      </div>
    </div>
  );
}

export default observer(Index);
