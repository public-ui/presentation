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
  [BMF, DEFAULT, ECL_EC, ECL_EU, ITZBund, TH],
  [],
  {
    theme: {
      detect: "auto",
    },
  }
)
  .then(() => {
    document.body.dataset.theme = "default";
  })
  .catch(() => console.warn);
