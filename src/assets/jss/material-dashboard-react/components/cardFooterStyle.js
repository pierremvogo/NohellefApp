import { grayColor } from "../../material-dashboard-react.js";

const cardFooterStyle = {
  cardFooter: {
    padding: "0",
    paddingTop: "10px",
    //margin: "0 15px 10px",
    borderRadius: "0",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    backgroundColor: "transparent",
    border: "0",
  },
  cardFooterProfile: {
    marginTop: "-15px",
  },
  cardFooterPlain: {
    paddingLeft: "0px",
    paddingRight: "0px",
    backgroundColor: "transparent",
  },
  cardFooterStats: {
    borderTop: "1px solid " + grayColor[10],
    marginTop: "20px",
    "& svg": {
      position: "relative",
      top: "4px",
      marginRight: "0px",
      marginLeft: "0px",
      width: "16px",
      height: "16px",
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      fontSize: "16px",
      position: "relative",
      top: "4px",
      marginRight: "0px",
      marginLeft: "0px",
    },
  },
  cardFooterChart: {
    borderTop: "1px solid " + grayColor[10],
  },
};

export default cardFooterStyle;
