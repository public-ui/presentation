import { TH } from "@public-oss/kolibri-themes";
import { register } from "@public-ui/components";
import {
  BMF,
  DEFAULT,
  DESYv2,
  ECL_EC,
  ECL_EU,
  ITZBund,
  MAPZ,
  ZOLLv2,
} from "@public-ui/themes";
import "./base.css";

register(
  [BMF, DEFAULT, DESYv2, ECL_EC, ECL_EU, ITZBund, MAPZ, ZOLLv2, TH],
  [],
  {
    theme: {
      detect: "auto",
    },
  }
)
  .then(() => {
    document.body.dataset.theme = "itzbund";
  })
  .catch(() => console.warn);
