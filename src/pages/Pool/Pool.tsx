import styles from "./Pool.module.scss";
import { DepositDashboard, Navbar, Pools, Footer, ChoosePool } from "components";
import { useModal, useTheme } from "hooks";
import { clsnm } from "utils/clsnm";
import { Button, Layout } from "ui";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Pool = () => {

  return (
    <>
      <Layout>
        <Navbar />
        <div className={styles.wrapper}>
          <DepositDashboard />
          <ChoosePool/>
          <Pools />
        </div>

        <Footer />
      </Layout>
    </>
  );
};

export { Pool };
