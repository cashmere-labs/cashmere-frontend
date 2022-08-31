import { Footer, Navbar, Manage , Gauge} from "components";
import styles from "./ManagePage.module.scss";
import { Layout } from "ui";
import { useTitle } from "hooks/useTitle";
import CALCULATER from "assets/icons/calculater.png";
import { Icon, Tooltip } from "ui";
import { InfoIcon } from "assets/icons";
import { useModal } from "hooks";


const ManagePage = () => {
  useTitle("Manage");

  const calculaterModal = useModal();
  return (
    <Layout>
      <Navbar />
      <div className={styles.wrapper}>
        <Manage />
        <Gauge modal={calculaterModal} />
        <div className={styles.veCSMBoosts} onClick={()=> calculaterModal.open()}>
          <div className={styles.boostsWrapper}>
            <img src={CALCULATER}></img>
            <div>veCSM boosts CSM APR (Booster Calculator) </div>
            <Tooltip placement="top" content="Content coming here">
              <Icon size={16}>
                <InfoIcon />
              </Icon>
            </Tooltip>
          </div>
        </div>
        {/* <Polls /> */}
      </div>
      <Footer />
    </Layout>
  );
};

export { ManagePage };
