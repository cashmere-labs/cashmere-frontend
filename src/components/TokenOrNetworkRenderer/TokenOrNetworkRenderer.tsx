import { Row } from "components/Row/Row";
import { Network } from "types/network";
import { Token } from "types/token";

const TokenOrNetworkRenderer = ({
  tokenOrNetwork,
  imgSize = 24,
}: {
  tokenOrNetwork: Token | Network;
  imgSize?: number;
}) => {
  return (
    <Row style={{ width: "max-content" }} alignItems="center">
      <img
        style={{ marginRight: "8px" }}
        width={imgSize}
        src={tokenOrNetwork.imageUrl}
      />
      <span style={{ color: `var(--text)` }}>{tokenOrNetwork.name}</span>
    </Row>
  );
};

export { TokenOrNetworkRenderer };
